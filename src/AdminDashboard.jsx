import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './AdminDashboard.css';
import LeaveRequest from './leaveRequest';
import AddFaculty from './AddFaculty';
import ModifyFaculty from './ModifyFaculty.html';
import LeaveStatus from './leaveStatus.html';
function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubMenuToggle = (e) => {
    const parentLi = e.target.parentElement.parentElement;
    parentLi.classList.toggle("showMenu");
  };

  const handleModifyFacultyClick = () => {
    window.location.href = './ModifyFaculty.html';
  };

  useEffect(() => {
    const handleArrowClick = (e) => {
      const arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    };

    const arrow = document.querySelectorAll(".arrow");
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", handleArrowClick);
    }

    return () => {
      for (let i = 0; i < arrow.length; i++) {
        arrow[i].removeEventListener("click", handleArrowClick);
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className={`sidebar ${sidebarOpen ? '' : 'close'}`}>
          <ul className="nav-links">
            {/* Sidebar content */}
            <li>
              <a href="#">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Admin Dashboard</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Category</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link" onClick={handleSubMenuToggle}>
                <a href="#">
                  <i className='bx bx-user'></i>
                  <span className="link_name">Faculty</span>
                </a>
                <i className='bx bxs-chevron-down arrow' onClick={handleSubMenuToggle}></i>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name" href="#">Faculty</a></li>
                <li><Link to="/add-faculty" >Add Faculty</Link></li>
               <li ><a href={ModifyFaculty}>Modify faculty</a></li>
                <li><a href="#">Remove faculty</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link" onClick={handleSubMenuToggle}>
                <a href="#">
                  <i className='bx bx-message-detail'></i>
                  <span className="link_name">Leave request</span>
                </a>
                <i className='bx bxs-chevron-down arrow' onClick={handleSubMenuToggle}></i>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name" href="#">Leave requests</a></li>
                <li><Link to="/leave-request" >View leave Request</Link></li>
                <li><a href={LeaveStatus}>Leave History</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className='bx bx-cog'></i>
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Setting</a></li>
              </ul>
            </li>
            <li>
              <div className="profile-details">
                <i className='bx bx-log-out'></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route exact path="/add-faculty" element={<AddFaculty />} />
        <Route exact path="/leave-request" element={<LeaveRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminDashboard;
