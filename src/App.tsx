import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Details from "./components/details";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/book/:isbn" component={Details} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
