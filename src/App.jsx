import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { routes } from "./routes";

import "./index.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          {routes.map((route, index) => (
            <Route
              key={index + 1}
              path={route.path}
              element={<route.element />}
              caseSensitive
            />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}
