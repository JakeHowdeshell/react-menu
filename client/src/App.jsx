import { Outlet } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

    return (
      <ApolloProvider client={client}>
      <div>
        <StoreProvider>
          <Header />
          <div className='main'>
            <Outlet />
          </div>
          <Footer />
        </StoreProvider>
        <ToastContainer />
      </div>
      </ApolloProvider>
  );
}

export default App;
