export default function Navbar() {
  return (
    <nav className="navbar">
<img src="/logo-text.png" alt="Dev Stack" className="logo" />

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}