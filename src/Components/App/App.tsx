import React from "react";
import "./App.css";
import {Route, Switch, useHistory} from "react-router-dom";
import { Main } from "../Main/Main";
import { Layout } from "../Layout/Layout";

const App: React.FC = () => {
    let history = useHistory()
    React.useEffect(()=>{
        history.push('/')
    }, [])
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
