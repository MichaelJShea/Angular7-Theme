// import external modules
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

// import internal(own) modules
import Router from "./router";
import fontAwesomeIcon from "../utility/icons/fontawesome";

//Fontawesome icons added here
library.add(fontAwesomeIcon);

const App = () => <Router />;

export default App;
