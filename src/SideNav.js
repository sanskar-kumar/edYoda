import * as React from "react";
import "./Sidenav.css";
import { AiFillHome, AiFillRead, AiOutlineSound } from "react-icons/ai";
function SideNav(props) {
  const[active,setActive]=React.useState("Home");
  React.useEffect(() => {
    setActive(props.title);
    }, [props.title]); 

  return (
    <div className="sidenav">
      <div className={active==="home"?"icon-desc-active":"icon-desc"}>
        <a href="/" className={active==="home"?"icons-active":"icons"}>
          <AiFillHome />
        </a>
        <div className={active==="home"?"icon-text-active":"icon-text"}>Home</div>
      </div>
      <div className={active==="modules"?"icon-desc-active":"icon-desc"}>

        <a href="/modules" className={active==="modules"?"icons-active":"icons"}>
          <AiFillRead />
        </a>
        <div className={active==="modules"?"icon-text-active":"icon-text"}>Modules</div>
      </div>
      <div className={active==="instructions"?"icon-desc-active":"icon-desc"}>
        <a href="/Instructions" className={active==="instructions"?"icons-active":"icons"}>
          <AiOutlineSound />
        </a>
        <div className={active==="instructions"?"icon-text-active":"icon-text"}>Instructions</div>
      </div>
    </div>
  );
}
export default SideNav;
