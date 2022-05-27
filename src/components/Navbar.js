const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="navbar__logo">
                <a href="/"><img src="/assets/img/logo.svg" alt="logo" /></a>
            </div>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar__menu"
                aria-controls="navbar__menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar__menu">
                <ul className="navbar-nav ml-auto">
                    <li className="d-lg-none">
                        <a className="navbar-nav-toggler" href="/" id="cross">&times;</a>
                    </li>
                    <li className="d-lg-none">
                        <a className="nav-link" href="/" id="nickname">BCR</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#Our_Service">Our Service</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#Why_Us">Why Us</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#Testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#FAQ">FAQ</a>
                    </li>
                    <li>
                        <button className="btn btn-success">Register</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
