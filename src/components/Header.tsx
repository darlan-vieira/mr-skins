import logo from "../../public/assets/logo.png";
import overlay from "../../public/assets/Overlay.gif";

const Header = () => {
  return (
    <header className="h-20 md:h-32 min-w-full border-b border-primary">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center justify-start mx-auto h-1">
          <img src={logo} alt="Logo" className="h-20 md:h-32 justify-start" />
        </div>
        <div className="flex items-center justify-center mx-auto h-1">
          <img
            src={overlay}
            alt="animação cabeçalho"
            className="min-h-full w-56"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
