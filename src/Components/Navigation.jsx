import { NavLink } from "react-router-dom";

const Navigation = () => {
    const style={ 
        background: "linear-gradient(rgb(255, 104, 10) 0%,rgb(255, 104, 10) 80%,rgb(255, 123, 0,0) 100%)",
        boxShadow:"0 -.8vw .8vw .1vw rgb(1, 0, 12)" }
    return ( 
        <div className="navigation">
            <NavLink
                to="/home"
                style={({ isActive }) =>
                isActive ? style : undefined
                }
            >Home</NavLink>
            <NavLink
                to="/"
                style={({ isActive }) =>
                isActive ? style : undefined
                }
            >Profile</NavLink>
            <NavLink
                to="/portfolio"
                style={({ isActive }) =>
                isActive ? style : undefined
                }
            >Portfolio</NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) =>
                isActive ? style : undefined
                }
            >Contact</NavLink>
            
            
        </div>
     );
}
 
export default Navigation;