import { Link } from "react-router-dom";

export default function NavBar({ logout, token }) {
  //TODO Show different links if logged in or not
  // TODO Implement logout functionality
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts"> Posts </Link>
        </li>
        <li>
          <Link to="/profile"> Profile </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/register"> Register </Link>
        </li>
        <br></br>
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </ul>
    </nav>
  );
}
