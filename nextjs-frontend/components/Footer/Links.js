import Link from "next/link";

const Links = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      <Link href="#" className="link link-hover">
        About us
      </Link>
      <Link href="#" className="link link-hover">
        Contact
      </Link>
      <Link href="#" className="link link-hover">
        Jobs
      </Link>
      <Link href="#" className="link link-hover">
        Press kit
      </Link>
    </div>
  );
};

export default Links;
