import { NavLink } from "react-router-dom";
import trip_wiz from "../images/trip_wiz.png"
import { Image } from "@chakra-ui/react";

const Navbar = () => {

    const links = [
      {
        id: 1,
        title: "Home",
        path: "/"
      },
  
      {
        id: 2,
        title: "Hotel",
        path: "/hotels"
      },
      {
        id: 6,
        title: "Login",
        path: "/login"
      },
      {
        id: 7,
        title: "Cart",
        path: "/cart"
      },
      {
        id: 8,
        title: "Flights",
        path: "/flight"
      },
    ];
  
    const activeStyle = {
      textDecoration: 'none',
      color: 'orange',
      fontSize:"28px",
      fontVariant: "small-caps"
    };
  
    const defaultStyle = {
      textDecoration: 'none',
      fontSize:"28px",
      fontVariant: "small-caps",
      backgroundColor: "#4c4177",
      color:"whitesmoke",
    };

  
    return (
      <div style={{display:"flex",backgroundColor: "#4c4177",color:"whitesmoke",justifyContent:"space-around",margin:"auto",padding:"10px"}}>
         <NavLink to="/" >
            <Image src={trip_wiz} w="70px" alt="travel" borderRadius={"50%"} />
          </NavLink>
          
        <div style={{display:"flex",justifyContent:"space-evenly",gap:"80px", maxW:"container.lg"}}   >
          {links.map((link) => (
            <div key={link.id} >
                <NavLink
                  to={link.path} 
                
                  style={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                  }
                >
                  {link.title}
                </NavLink>
  
            </div>
          ))}
          
        </div>
      </div>
    );
  };
  
  export { Navbar };

