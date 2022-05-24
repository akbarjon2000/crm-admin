import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">U</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              메인
            </Link>
          </li>
          <p className="title">주문관리</p>

          <Link to="/esim" style={{ textDecoration: "none" }}>
            <li>
              <span>eSIM 주문</span>
            </li>
          </Link>

          <Link to="/usim" style={{ textDecoration: "none" }}>
            <li>
              <span>USIM 주문</span>
            </li>
          </Link>
		  
          <li>
            <span>취소관리</span>
          </li>
          <li>
            <span>반품관리</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
