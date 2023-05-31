import Links from "./Links";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
      <Links />
      <div>
        <SocialMedia />
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Javad Jadidi</p>
      </div>
    </footer>
  );
};

export default Footer;
