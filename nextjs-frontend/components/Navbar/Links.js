import { useAuth } from "@/hooks/auth";
import Link from "next/link";

const Links = () => {
  const { user, logout } = useAuth();

  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="#">Item 1</Link>
      </li>
      <li tabIndex={0}>
        <Link href="#">
          Auth
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-base-100">
          {user ? (
            <li>
              <a href="#" onClick={logout}>Logout</a>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </li>
      <li>
        <Link href="#">Item 3</Link>
      </li>
    </ul>
  );
};

export default Links;
