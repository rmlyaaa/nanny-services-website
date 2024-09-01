import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nannies from "./pages/Nannies";
import Favorites from "./pages/Favorites";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
