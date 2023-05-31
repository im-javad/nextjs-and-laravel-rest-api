import Link from "next/link";

const Links = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="#">Item 1</Link>
      </li>
      <li tabIndex={0}>
        <Link href="#">
          Parent
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
          <li>
            <Link href="#">Submenu 1</Link>
          </li>
          <li>
            <Link href="#">Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#">Item 3</Link>
      </li>
    </ul>
  );
};

export default Links;
