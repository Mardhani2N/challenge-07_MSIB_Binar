import { useEffect } from "react"

const Testimonial = () => {
    useEffect(() => {
        if (window.loadOwlCarousel) {
            window.loadOwlCarousel()
        }
    }, [])

    return (
        <>
            <div className="content-4" id="Testimonial">
                <p className="content-4__header--1">Testimonial</p>
                <p className="content-4__header--2">Berbagai review positif dari para pelanggan kami</p>
                <div id="owl-container">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-2 content-4__gambar">
                                    <img src="/assets/img/testi-2.svg" alt="testi-1" />
                                </div>
                                <div className="col-sm content-4__text">
                                    <p><img src="/assets/img/rate.svg" alt="rate" id="rate" /></p>
                                    <p className="content-4__text--1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        <br /> eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        <br /> sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                        <br /> adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="content-4__text--2">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-2 content-4__gambar">
                                    <img src="/assets/img/testi-2.svg" alt="testi-2" />
                                </div>
                                <div className="col-sm content-4__text">
                                    <p><img src="/assets/img/rate.svg" alt="rate" id="rate" /></p>
                                    <p className="content-4__text--1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        <br /> eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        <br /> sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                        <br /> adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="content-4__text--2">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-2 content-4__gambar">
                                    <img src="/assets/img/testi-3.svg" alt="testi-3" />
                                </div>
                                <div className="col-sm content-4__text">
                                    <p><img src="/assets/img/rate.svg" alt="rate" id="rate" /></p>
                                    <p className="content-4__text--1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        <br /> eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        <br /> sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                        <br />adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="content-4__text--2">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial