import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classlist from "./pages/Classlist";
import CreateClass from "./pages/CreateClass";
import UpdateClass from "./pages/UpdateClass";
import "./App.css";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Classlist />} />
          <Route path="/update/:id" element={<UpdateClass />} />
          <Route path="/create" element={<CreateClass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
