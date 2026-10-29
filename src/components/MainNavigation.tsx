import { Link } from "react-router";

export default function MainNavigation() {
  // use Link and to for navigation since 'a' tags would cause full
  // page reloads and messes up any state in the app
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/add-glass">Add Glass</Link>
        </li>
      </ul>
    </nav>
  );
}
