import { NavLink } from "react-router-dom";


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
        id: 3,
        title: "Blogs",
        path: "/blogs"
      },
      {
        id: 4,
        title: "Abouts",
        path: "/about"
      },
      {
        id: 5,
        title: "Contact",
        path: "/contact"
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
    ];
  
    const activeStyle = {
      textDecoration: 'none',
      color: 'orange',
      fontSize:"20px",
      fontVariant: "small-caps"
    };
  
    const defaultStyle = {
      textDecoration: 'none',
      fontSize:"20px",
      fontVariant: "small-caps",
      backgroundColor: "#4c4177",
      color:"whitesmoke",

     
      
    };
    const navbarStyle = {
      backgroundColor: "#4c4177",
      backgroundImage: "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)"
    }
  
    return (
      <div style={{display:"flex",backgroundColor: "#4c4177",color:"whitesmoke"}}>
         <NavLink to="/" >
            {/* <Image src={travel} w="100px" alt="travel" /> */}
            <h2 style={{color:"whitesmoke"}}>Logo</h2>
          </NavLink>
          
        <div style={{display:"flex",justifyContent:"space-between", gap:"40px",ml:"600px", maxW:"container.lg"}}   >
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

