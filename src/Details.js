import * as React from 'react';
import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import "./Details.css";

function Details() {
    // const [open, setOpen] = React.useState(false);
    const [courseHeading, setcourseHeading] = useState("Data Science");
    const [courseCode,setCode] = useState("DS1234");
    const handleMenu = (courseName,courseCode) => {
        setcourseHeading(courseName);
        setCode(courseCode);
        // console.log('clicked one');
        // console.log(courseName);
      };
      
      return (
        <div className='details'>
        <Dropdown
          trigger={<button className='dropdown-button'>{courseCode} &nbsp; <AiFillCaretDown/> &nbsp; {courseHeading} </button>}
          menu={[
            <div className='dropdown-box'>
            <div className='select-course'>Select Programme</div>
            <div className='dropdown-menu'>
                
                <button  className={courseCode==="DS1234"?"course-code2":"course-code"} onClick={()=>handleMenu("Data Science","DS1234")}>DS1234</button>
                <button className={courseCode==="DM1234"?"course-code2":"course-code"} onClick={()=>handleMenu("Data Mining","DM1234")}>DM1234</button>
                <button className={courseCode==="ML1234"?"course-code2":"course-code"} onClick={()=>handleMenu("Machine Learning","ML1234")}>ML1234</button>

            </div>
            </div>
            
            
          ]}
        />
        </div>
      );
    };
    
    const Dropdown = ({ trigger, menu,isOpen}) => {
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(!open);
      };
    
      return (
        <div className="dropdown">
          {React.cloneElement(trigger, {
            onClick: handleOpen,
          })}
          {open ? (
            <div>
              {menu.map((menuItem, index) => (
                <div className='menu' key={index}>
                  {React.cloneElement(menuItem, {
                    onClick: () => {
                      setOpen(false);
                    },
                  })}
                </div>
              ))}
            </div>
            
          ) : null}
        </div>
      );
}
export default Details;
