import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-info text-dark">
  <div className="container-fluid ">
    <a className="navbar-brand nav-item active" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Camisas</a></li>
            <li><a className="dropdown-item" href="#">Camisetas</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Zapatillas</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success  bg-success text-white bg-success-subtle-hover" type="submit">Search</button>
      </form>
    </div>
    <div className="px-5">
        <CartWidget/>
    </div>

  </div>
</nav>


    )


}


export default Navbar