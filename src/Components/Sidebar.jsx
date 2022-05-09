import { useState } from "react";
import About from "./About";

const Sidebar = () => {
    const style={background: "linear-gradient(to right,orange 0%,rgb(158, 66, 0) 100%)",marginRight:"-0vw", marginLeft:"1vw", transform:"scale(1.1)", boxShadow:"1.2vw .3vw 1vw .01vw black"}
    const [active, setActive] = useState("link")

    return ( 
        <div className="con">
        <div className="sidebar">
            <div className="link" onClick={()=> setActive("link")} style={active==="link"? style:{}}><h2>ABOUT</h2></div>
            <div className="link" onClick={()=> setActive("inform")} style={active==="inform"?style:{}} ><h2>INFORMATION</h2></div>
            <div className="link" onClick={()=> setActive("skill")} style={active==="skill"?style:{}}><h2>SKILLS</h2></div>
            <div className="link" onClick={()=> setActive("personal")} style={active==="personal"?style:{}}><h2>PERSONAL</h2></div>
        </div>
        <About active={active}/>
        </div>
     );
}
 
export default Sidebar;