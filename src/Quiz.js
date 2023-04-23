import "./Quiz.css";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import ModuleSidebar from "./ModuleSidebar";
import {AiFillCalendar,AiOutlineFieldTime} from 'react-icons/ai'
import Footer from './Footer';
function Quiz() {
  const d = new Date();
  const DAYS = ["Sunday", "Monday","Tuesday","Thursday","Friday","Saturday"];
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
      <SideNav title="modules"/>
      <ModuleSidebar title="Quiz" />
      <div className="quiz-content">
        <div className="quiz-heading">
        <p style={{ fontSize: "30px" ,fontWeight:"600"}}>Quiz-1: Data Types</p>
          <p style={{ fontSize: "20px",fontWeight:"200" }}>{date}</p>
          <p style={{ fontSize: "25px" }}>Quiz Details</p>
        </div>
        <div className="quiz-details">
            <div className="quiz-questions"> 
            {/* three divisions */}
            <div className="quiz-questions-content"> 10
            <p style={{fontSize:'20px',textAlign:'center'}}>Questions</p>
             </div>
            <div className="quiz-questions-content"> --
            <p style={{fontSize:'20px',textAlign:'center'}}> Duration</p> </div>
            <div className="quiz-questions-content"> 180 <p style={{fontSize:'20px',textAlign:'center'}}>
                Score
            </p> </div>
            </div>
            <div className="quiz-date">
                {/* two divisions */}
                <div className="quiz-date-details"> 
                <p className="quiz-date-details-content">Start:</p>
                <p className="quiz-date-details-content"><AiFillCalendar/> 23 April 2022</p>
                <p className="quiz-date-details-content"><AiOutlineFieldTime/> 8:30 PM </p>
                </div>
                <div className="quiz-date-details">
                <p className="quiz-date-details-content">End:</p>
                <p className="quiz-date-details-content"><AiFillCalendar/> 23 June 2022</p>
                <p className="quiz-date-details-content"> <AiOutlineFieldTime/> 11:59 PM</p>
                </div>

            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Quiz;
