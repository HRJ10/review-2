// UserDashboard.jsx
import React,{ useState , useEffect} from 'react';
import './Home.css';
import profile from './icons/profile.png';
import Logo from './Images/Logo.png';
import attendance from './icons/attendance.png';
import course from './icons/course.png';
import email from './icons/email.png';
import exam from './icons/exam.png';
import leave from './icons/leave.png';
import onedrive from './icons/onedrive.png';
import schedule from './icons/schedule.png';
import word from './icons/word.png';
import examcell from './icons/examcell.png';
import gatepass from './icons/gatepass.png';
import hostel from './icons/hostel.png';
import issue from './icons/issue.png';
import library from './icons/library.png';
import Userpro from './Userpro.html';
function UserDashboard() {
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[]);
    return (
        <>
            <header className="header">
                <img src={Logo} alt="logo" />
                <div className="portalname">Faculty Portal</div>
                <div className="profile">
                    <div className="Flex"> 
                        <span>{time.toLocaleTimeString()}</span>
                        <span>Krishnakumar</span>
                        <span>{time.toLocaleDateString()}</span>
                        <span>Dept of CSE</span>
                    </div>
                    <img src={profile} alt="profile" className="profilepic" />
                </div>
            </header>
            <div className="portalrest">
                <div className="announcementList">
                    <div className="announcementBox">
                        <span>
                            Announcement 1
                        </span>
                        <span className="Discriptions">
                            Discriptions
                        </span>
                    </div>
                    <div className="announcementBox">
                        <span>
                            Announcement 2
                        </span>
                        <span className="Discriptions">
                            Discriptions
                        </span>
                    </div>
                    <div className="announcementBox">
                        <span>
                            Anouncement 3
                        </span>
                        <span className="Discriptions">
                            Discriptions
                        </span>
                    </div>
                    <div className="announcementBox">
                        <span>
                            Announcement 4
                        </span>
                        <span className="Discriptions">
                            Discriptions
                        </span>
                    </div>
                    <div className="announcementBox">
                        <span>
                            Anouncement 5
                        </span>
                        <span className="Discriptions">
                            Discriptions
                        </span>
                    </div>
                </div>
                <div className="portalrestbutton">
                    <button className="PortalButton">
                        <img src={attendance} alt="" />
                        <span>Attendence</span>
                    </button>
                    <button className="PortalButton">
                        <img src={course} alt="" />
                        <span>Courses</span>
                    </button>
                    <button className="PortalButton">
                        <img src={schedule} alt="" />
                        <span>Time Table</span>
                    </button>
                    <button className="PortalButton">
                        <img src={exam} alt="" />
                        <span>Marks</span>
                    </button>
                    <button className="PortalButton">
                        <img src={leave} alt="" />
                        <span>Apply Leave</span>
                    </button>
                    <button className="PortalButton">
                        <img src={email} alt="" />
                        <span>Outlook</span>
                    </button>
                    <button className="PortalButton">
                        <img src={onedrive} alt="" />
                        <span>OneDrive</span>
                    </button>
                    <button className="PortalButton">
                        <img src={word} alt="" />
                        <span>Word</span>
                    </button>
                    <button className="PortalButton">
                        <img src={profile} alt="" />
                        <a href={Userpro} id='ha'>Update Profile</a>
                    </button>
                    <button className="PortalButton">
                        <img src={examcell} alt="" />
                        <span>Exam Cell</span>
                    </button>
                    <button className="PortalButton">
                        <img src={gatepass} alt="" />
                        <span>Gate Pass Requets</span>
                    </button>
                    <button className="PortalButton">
                        <img src={library} alt="" />
                        <span>Library</span>
                    </button>
                    <button className="PortalButton">
                        <img src={hostel} alt="" />
                        <span>Hostel</span>
                    </button>
                    <button className="PortalButton">
                        <img src={issue} alt="" />
                        <span>Any Issues</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
