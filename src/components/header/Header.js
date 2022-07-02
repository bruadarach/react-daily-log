import "./Header.css"

const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">React | Node</span>
      <span className="headerTitleLg">DAILY LOG</span>
    </div>
    <img 
      className="headerImg"
      src="img/header-image.jpg" 
      alt="header-image"
    />
    </div>

  );
}

export default Header;