
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin"
import Public from "./pages/Public"
import NoPage from "./pages/NoPage"
import Layout from "./Layout"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="admin" element={<Admin />} />
        <Route path="public" element={<Public />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
