import * as React from "react";
import "./ModuleSidebar.css";
import { AiFillPlayCircle,AiFillQuestionCircle,AiTwotoneFile } from "react-icons/ai";

function ModuleSidebar(props) {

    const [active, setActive] = React.useState("");
    React.useEffect(() => {
        setActive(props.title);
        }, [props.title]); 
    const handleClick=(itemName)=>{
        setActive(itemName);
    }
  return (
    <div className="module-sidebar">
      <div className="module-sidebar-items">
        <div className="module-sidebar-item">
          {" "}
          <a className={active==="Topic"?"module-sidebar-link-active":"module-sidebar-link"} href="/topic" onClick={()=>handleClick("Topic")}>
            <AiFillPlayCircle className="module-icons" /> Topic: Python Loops
          </a>{" "}
        </div>
        <div className="module-sidebar-item">
          {" "}
          <a className={active==="Quiz"?"module-sidebar-link-active":"module-sidebar-link"} href="/quiz" onClick={()=>handleClick("Quiz")} >
            <AiFillQuestionCircle className="module-icons" /> Quiz 1: Data Types
          </a>{" "}
        </div>
        <div className="module-sidebar-item">
          {" "}
          <a className={active==="Assignment"?"module-sidebar-link-active":"module-sidebar-link"} href="/assignment" onClick={()=>handleClick("Assignment")} >

            <AiTwotoneFile className="module-icons" /> Assignment
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
export default ModuleSidebar;
