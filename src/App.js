import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/AddUser";
import Edit from "./components/EditUser";
import Home from "./components/Home";
import NavBar from "./components/layout/navBar";
import { GlobalProvier } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvier>
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/add" element={<Add />} />
              <Route exact path="/edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </Router>
      </GlobalProvier>
    </div>
  );
}

export default App;
