import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import MainLayout from "./layouts/MainLayout";
import Auth from "./modules/auth";
import routes from "./routes";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        {routes.map(({ path, children }) => (
          <Route path={path} key={path}>
            <MainLayout>{children}</MainLayout>
          </Route>
        ))}
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
