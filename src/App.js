import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/header/Header";

function App() {
  const links = [
    { label: "HomePage", link: "/" },
    { label: "LoginPage", link: "/login" },
    { label: "RegisterPage", link: "/register" },
  ];

  return (
    <div className="App">
      <Header links={links} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
