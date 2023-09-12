function Navbar() {
    return (
        <>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">WikiCountries</a>
                <a className="navbar-brand" href="/:countryId">Details</a>
            </div>
            </nav>
        </>
    )
}

export default Navbar;
