import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const [showButton, setShowButton] = useState()

  useEffect(() => {
    if (location.pathname === "/cars") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [location.pathname]);

  return (
    <div className="d-flex content-1">
      <div className="col-md-6 content-1__text">
        <p className="content-1__text--1"> Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
        <p className="content-1__text--2"> Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          <br /> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br /> untuk sewa mobill selama 24 jam.
        </p>
        {showButton ? (
          <Link
            className="btn btn-success showbutton"
            to="/cars"
          >
            Mulai Sewa Mobil
          </Link>
        ) : (
          <p></p>
        )}
      </div>
      <div className="col-md-6 d-flex justify-content-end content-1__gambar">
        <img className="img-fluid" src="/assets/img/car.svg" alt="car" id="car" />
      </div>
    </div>
  )
}

export default Header
