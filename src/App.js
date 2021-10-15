import Home from "./component/Home";

import { ApolloProvider } from "@apollo/client";
import Apollo from "./component/Apollo";
import client from "./component/apollo-client";

import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
