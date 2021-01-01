import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import HrModule from "../pages/HrModule";
import TrainingModule from "../pages/TrainingModule";
import About from "../pages/About";

const Router = () => {
  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/hr-module"} component={HrModule} />
        <Route exact path={"/training-module"} component={TrainingModule} />
        <Route exact path={"/about"} component={About} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
