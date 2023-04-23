import * as React from "react";
import "./Home.css";
import logo from "./assets/da.png";
import logo2 from "./assets/da2.png";
import LinearProgress from "@mui/material/LinearProgress";
function Home() {
  const progress=5;
  return (
    <div className="home">
      <div className="upcoming-certifications">
        <div className="upcoming-certifications-heading">
          {" "}
          Upcoming Certifications{" "}
        </div>
        <div className="upcoming-certifications-details">
          <div className="certifications-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="certifications-details">
            <div className="certifications-minor">
              CERTIFICATIONS | ATTEMPT 1
            </div>
            <div className="certifications-name">
              DATA ANALYSIS CERTIFICATION
            </div>
            <div className="certifications-date">COMPLETED | 21 MAR 2022</div>
          </div>
          <div className="exam-structure">
            <div className="exam-structure-heading">Exam Structure</div>
            <div className="exam-structure-details">
              <div className="round">
                <div className="round-heading">Round 1</div>
                <div className="round-details"> MCQ</div>
                <div className="round-details"> Quiz</div>
              </div>
              <div className="round">
                <div className="round-heading">Round 2</div>
                <div className="round-details"> Coding</div>
              </div>
            </div>
          </div>
          <div className="exam-details">
            <button className="exam-details-button">VIEW EXAM DETAILS</button>
          </div>
        </div>
      </div>
      <div className="continue-learning">
        <div className="continue-learning-heading">Continue Learning</div>
        <div className="module-details"><a href="/aa" style={{textDecoration:'none',textAlign:'center',color:'#0eb3ff'}}>VIEW MODULE DETAILS</a></div>
        <div className="continue-learning-details">
          <div className="left-part">
            <div>
              <div className="continue-learning-course">
                <div className="continue-learning-course-logo">
                  <img src={logo2} alt="logo" />
                </div>
                <div className="continue-learning-course-heading">
                  DATA WRANGLING AND VISUALIZATION
                </div>
              </div>
              <div className="test-instructor">
                <div className="test-instructor-logo">
                  {" "}
                  <img
                    className="user-img"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="user"
                  />
                </div>
                <div className="test-instructor-heading">Test Instructor</div>
              </div>
              <div className="progress-records">
                Live Assignments {progress}/100{" "}
                <LinearProgress className="progress-bar" variant="determinate" value={progress} />
                MCQ {progress}/100
                <LinearProgress className="progress-bar" variant="determinate" value={progress} />
                Quiz {progress}/100{" "}
                <LinearProgress className="progress-bar" variant="determinate" value={progress} />
                
              </div>
            </div>
            </div>
            <div className="today-plan"> 
            <div className="today-plan-details">Today's Plan
            <h2 style={{color: '#0eb3ff'}}>Data Analaysis using Python</h2>
            </div>
            
            
            <div className="today-plan-details">
            <button className="join" >Join Now</button>
            </div>
            </div>
            <div className="progress-parent">
          <div className="Progress-Overview">
            <div className="Progress-Overview-heading"> Progress Overview </div>
            <div className="Progress-Overview-details"> {progress}% <LinearProgress className="progress-bar-right" variant="determinate" value={progress} /></div>
            <div className="Progress-Overview-details"> {progress}%  <LinearProgress className="progress-bar-right" variant="determinate" value={progress} /></div>
            <a href="/aa" style={{textDecoration:'none',textAlign:'center'}}><h2 style={{fontSize:'20px',color:'#0eb3ff'}}>VIEW DETAILED PROGRESS</h2></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
