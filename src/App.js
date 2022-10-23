import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBarHeader from "./component/NavBarHeader";
import SignUpPage from "./pages/SignUpPage";
import SearchBox from "./component/SearchBox";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarHeader />
        <SearchBox />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
