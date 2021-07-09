import React, {StrictMode} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
<StrictMode>    
<Router history={history}>
<App/>
</Router>
</StrictMode>, document.getElementById("root"))