import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/added-users" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
