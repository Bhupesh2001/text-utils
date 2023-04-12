function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ fontWeight: "bold", fontSize: "25px" }}
        >
          {props.title}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
