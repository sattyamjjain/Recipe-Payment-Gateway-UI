import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePageContainer from "../Components/HomePageContainer";
import PaymentContainer from "../Components/PaymentContainer";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id/payment" component={PaymentContainer} />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </BrowserRouter>
  );
}
