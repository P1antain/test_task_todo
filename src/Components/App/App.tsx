import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main/Main";
import { Layout } from "../Layout/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Main} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
