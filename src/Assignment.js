import "./Quiz.css";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import ModuleSidebar from "./ModuleSidebar";
import { AiFillCalendar, AiOutlineFieldTime } from "react-icons/ai";
import Footer from './Footer';

function Quiz() {
  const d = new Date();
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date =
    d.getDate() +
    "-" +
    d.getMonth() +
    "-" +
    d.getFullYear() +
    " , " +
    DAYS[d.getDay()] +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();

  return (
    <div>
      <Navbar />
      <SideNav title="modules" />
      <ModuleSidebar title="Assignment" />
      <div className="quiz-content">
        <div className="assignment-content">
          <div className="assignment-heading">
            <p style={{ fontSize: "30px", fontWeight: "600" }}>
              Assignment 1: Operator Loops
            </p>
            <p style={{ fontSize: "20px", fontWeight: "200" }}>{date}</p>
            <p style={{ fontSize: "25px" }}>Assignment Details</p>
          </div>
          <div className="assignment-details">
          <div className="assignment-questions-content"> <strong style={{fontWeight:'400'}}>3</strong>
            <p style={{fontSize:'15px'}}>Problems</p>
             </div>
            <div className="assignment-questions-content"><strong style={{fontWeight:'400'}}>100</strong>
            <p style={{fontSize:'15px'}}>Total Score </p> </div>
          </div>
        </div>
        <div className="quiz-details">
          <div className="quiz-questions">
            {/* three divisions */}
            <div className="quiz-questions-content">
              {" "}
              <strong style={{fontWeight:'400'}}>3</strong>

              <p style={{ fontSize: "20px", textAlign: "center" }}>Problems</p>
            </div>
            <div className="quiz-questions-content">
              {" "}
              <strong style={{fontWeight:'400'}}>100</strong>
              <p style={{ fontSize: "20px", textAlign: "center" }}>
                {" "}
                Total Score
              </p>{" "}
            </div>
          </div>
          <div className="quiz-date">
            {/* two divisions */}
            <div className="quiz-date-details">
              <p className="quiz-date-details-content">Start:</p>
              <p className="quiz-date-details-content">
                <AiFillCalendar /> 23 April 2022
              </p>
              <p className="quiz-date-details-content">
                <AiOutlineFieldTime /> 8:30 PM{" "}
              </p>
            </div>
            <div className="quiz-date-details">
              <p className="quiz-date-details-content">End:</p>
              <p className="quiz-date-details-content">
                <AiFillCalendar /> 23 June 2022
              </p>
              <p className="quiz-date-details-content">
                {" "}
                <AiOutlineFieldTime /> 11:59 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Quiz;
