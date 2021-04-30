import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const { Switch, Route } = require("react-router");

const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./components/pages/NoFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/newquote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
