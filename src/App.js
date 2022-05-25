import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Sidebar from "./components/sidebar/Sidebar"
import { sidebar_obj } from "./utils/sidebar_obj";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import EsimOrder from "./pages/order/EsimOrder";
import Generic from "./pages/generic/Generic";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            {
              sidebar_obj.map(({ id, pathname, component: Element, child }) => (
                <Route key={id} path={pathname} element={<Element />} />
              ))
            }
            <Route path="/order/eSIM" element={<Generic />} />
            <Route path="/order/uSIM" element={<Generic />} />
            <Route path="/order/cancellation" element={<Generic />} />
            <Route path="/order/return" element={<Generic />} />
            <Route path="/product/list" element={<Generic />} />
            <Route path="/product/customlist" element={<Generic />} />
            <Route path="/product/linestatus" element={<Generic />} />
            <Route path="/product/eSIMinventory" element={<Generic />} />
            <Route path="/product/USIMstock" element={<Generic />} />
            <Route path="/product/faultline" element={<Generic />} />
            <Route path="/affiliatechannel/list" element={<Generic />} />
            <Route path="/account/list" element={<Generic />} />
            <Route path="/account/customersales" element={<Generic />} />
            <Route path="/account/settlementstatement" element={<Generic />} />
            <Route path="/statistics/salesstatus" element={<Generic />} />
            <Route path="/statistics/productshipments" element={<Generic />} />
            <Route path="/statistics/channelshipments" element={<Generic />} />
            <Route path="/statistics/visitorstatus" element={<Generic />} />
            <Route path="/user/member" element={<Generic />} />
            <Route path="/user/coupon" element={<Generic />} />
            <Route path="/user/reserve" element={<Generic />} />
            <Route path="/user/review" element={<Generic />} />
            <Route path="/user/benefit" element={<Generic />} />
            <Route path="/preferences/userscreen" element={<Generic />} />
            <Route path="/preferences/announcement" element={<Generic />} />
            <Route path="/preferences/eventnotice" element={<Generic />} />
            <Route path="/preferences/customersupport" element={<Generic />} />
            <Route path="/preferences/staff" element={<Generic />} />
            <Route index element={<Home />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
