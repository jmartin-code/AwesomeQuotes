import QuoteList from "../quotes/QuoteList";

const data = [
  {
    id: "1",
    author: "Max",
    text: "Learning React is fun!!",
  },
  {
    id: "2",
    author: "Maximum",
    text: "Learning React is Cool!!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={data}/>;
};

export default AllQuotes;
