// import external modules
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import internal(own) modules
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux";
import "./index.scss";
import "./assets/fonts/feather/css/feather.css";
import "flag-icon-css/sass/flag-icon.scss";
import { SpinnerComponentHome } from "./components/spinner/Spinner";
const LazyApp = lazy(() => import("./app/App"));

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<SpinnerComponentHome />}>
      <LazyApp />
    </Suspense>
  </Provider>,
  root
);

registerServiceWorker();
