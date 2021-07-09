import React, {StrictMode} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { HashRouter as Router } from "react-router-dom";


ReactDOM.render(
<StrictMode>    
<Router basename="/">
<App/>
</Router>
</StrictMode>, document.getElementById("root"))