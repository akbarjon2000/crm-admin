import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EsimOrder from "./pages/order/EsimOrder";
import UsimOrder from "./pages/order/UsimOrder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/esim" element={<EsimOrder />} />
          <Route exact path="/usim" element={<UsimOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
