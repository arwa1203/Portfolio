import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Contact from "./components/contact/contact"
import Projects from "./components/projects/projects"

const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    );
  };

  export default Routes