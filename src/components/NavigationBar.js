import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo');
  const links = [
    { to: "/", label: "Home" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
  ];
  const logout =()=>{
    localStorage.removeItem('userInfo');
    navigate("/login");
  }
  return (
    <>
      <nav>
        <ul>
          {links.map((link) => (
            <>
              <li>
                <Link to={link.to}>{link.label}</Link>
              </li>
            </>
          ))}
        </ul>
        {userInfo&&<button onClick={logout}>Logout</button>}
      </nav>
    </>
  );
};
export default NavigationBar;
