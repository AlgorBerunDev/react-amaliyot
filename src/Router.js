import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import routes from "./routes";
import Layout, { LayoutType } from "./layouts/Layout";

const UnauthorizedPage = () => {
  return <h1>Access Denied</h1>;
};

const PrivateRoute = ({ isPrivate, children }) => {
  if (!isPrivate) return <>{children}</>;
  if (!localStorage.getItem("access_token")) return <UnauthorizedPage />;
  return <>{children}</>;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ isPrivate = false, layoutType = LayoutType.default, path, children }) => (
          <Route exact path={path} key={path}>
            <PrivateRoute isPrivate={isPrivate}>
              <Layout type={layoutType}>{children}</Layout>
            </PrivateRoute>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
