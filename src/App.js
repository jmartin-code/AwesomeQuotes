import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

const { Switch, Route } = require("react-router");

function App() {
  return (
    <Layout>
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
      </Switch>
    </Layout>
  );
}

export default App;
