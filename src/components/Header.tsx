import logo from "../../public/assets/logo.png";
import overlay from "../../public/assets/Overlay.gif";
import ButtonLayot from "./Button";

const Header = () => {
  return (
    <header className="h-20 md:h-32 min-w-full border-b border-primary">
        <div className="flex items-center justify-between mx-auto px-8">
          <img src={logo} alt="Logo" className="h-20 md:h-32" />

          <ButtonLayot />
        </div>
    </header>
  );
};

export default Header;
