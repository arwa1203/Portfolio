import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
