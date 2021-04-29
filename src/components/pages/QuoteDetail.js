import { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";

import HighligtedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

// const data = [
//   {
//     id: "1",
//     author: "Max",
//     text: "Learning React is fun!",
//   },
//   {
//     id: "2",
//     author: "Matemannd",
//     text: "Learning React is sdfsdfds!",
//   },
// ];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
    return () => {};
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighligtedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
