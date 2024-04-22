import React from 'react';
import './faculty_sidebar.css'; // Importing CSS file
import 'bootstrap/dist/js/bootstrap.min';
import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";
import "https://cdn.lineicons.com/4.0/lineicons.css";
import './sidebar_script.js';
function Home() {
  return (
    <section id="starter">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/Images/amrita_logo.png" width="60" height="60" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><i className="lni lni-home"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><i className="lni lni-popup"></i></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="lni lni-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">View Profile</a></li>
                  <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                  <li><a className="dropdown-item" href="/HTML/index.html">LogOut</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* sidebar */}
      <div className="wrapper">
        <aside id="sidebar">
          <div className="d-flex">
            <button className="toggle-btn" type="button">
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <a href="#">Dashboard</a>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-bar-chart"></i>
                <span>Statistics</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                <i className="lni lni-eraser"></i>
                <span>Leave Requests</span>
              </a>
              <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className="sidebar-item">
                  <a href="/HTML/LeaveRequest.html" className="sidebar-link">Apply Leave</a>
                </li>
                <li className="sidebar-item">
                  <a href="/HTML/leaveStatus.html" className="sidebar-link">Track Leave Requests</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-list"></i>
                <span>Events</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <a href="/HTML/index.html" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>
        <div className="main p-3">
          <div className="text-center">
            <h1>
              Welcome!
            </h1>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      <script src="/Script/sidebar_script.js"></script>
    </section>
  );
}

export default Home;
