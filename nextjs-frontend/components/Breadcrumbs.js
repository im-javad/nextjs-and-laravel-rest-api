import Link from "next/link";

const Breadcrumbs = ({ crumbs }) => {
  const preparedCrumbs = Object.keys(crumbs).map((key) => (
    <li>
      <Link href={crumbs[key].link}>{crumbs[key].title}</Link>
    </li>
  ));

  return (
    <div className="text-sm breadcrumbs">
      <ul>{preparedCrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
