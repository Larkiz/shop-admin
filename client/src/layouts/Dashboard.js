/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Routes } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

function Dashboard(props) {
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={"black"}
        activeColor={"info"}
      />
      <div className="main-panel">
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
