import "./styles.css"
import Nav from "./Nav";
import { HashRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Shop" component={Shop} />
      </Router>
    </div>
  );
};
const Home = () => {
  return <h1>Home Page</h1>;
};
const About = () => {
  return <h1>About Page</h1>;
};
const Shop = () => {
  return <h1>Shop Page</h1>;
};
export default App;