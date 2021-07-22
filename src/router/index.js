import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import ActivatePage from "../pages/active_page/ActivatePage";
import HomePage from "../pages/HomePage";
import HrModule from "../pages/HrModule";

const Router = () => {
  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/hr-module"} component={HrModule} />
        {/* <Route exact path={"/training-module"} component={TrainingModule} /> */}
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/verify"} component={ActivatePage} />
        <Redirect to={"/"} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
