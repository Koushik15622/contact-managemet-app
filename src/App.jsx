import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Map from "./pages/map";
import Chart from "./pages/chart";
import Create from "./pages/crud/CreateContact";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./pages/crud/UpdateContact";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MapView" element={<Map />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/Chart" element={<Chart />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
