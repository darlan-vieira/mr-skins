import logo from "@/assets/logo.png";
import ButtonLayot from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex items-center justify-center py-3">
        <div className="inline-flex gap-1 items-center">
          <img src={logo} alt="Logo" className="h-20 md:h-32" />

          <ButtonLayot />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;