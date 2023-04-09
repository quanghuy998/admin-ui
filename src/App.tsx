import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from 'react-router';
import Home from './pages/home/home';
import { publicRoutes } from "./routes";
import AdminLayout from "./components/layouts/admin-layout/admin-layout";
import { Fragment } from "react";
import EmptyLayout from "./components/layouts/empty-layout/empty-layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = EmptyLayout;
            if (route.layout) {
              Layout = route.layout;
            }

            return (
              <Route key={index} path={route.path} 
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
            );
          })}
        </Routes>
      </div>
  </Router>
  );
}

export default App;
