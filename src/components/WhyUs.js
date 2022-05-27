const WhyUs = () => {
    return (
        <>
            <div className="container content-3" id="Why_Us">
                <p className="content-3__text--1">Why Us?</p>
                <p className="content-3__text--2">Mengapa harus memilih Binar Car Rental?</p>
                <div className="d-flex justify-content-between content-3__body">
                    <div className="card">
                        <div className="card-body">
                            <p><img src="/assets/img/thumbs-up.svg" alt="thumbs-up" /></p>
                            <h6><b>Mobil Lengkap</b></h6>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p><img src="/assets/img/price.svg" alt="price" /></p>
                            <h6><b>Harga Murah</b></h6>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p><img src="/assets/img/time.svg" alt="time" /></p>
                            <h6><b>Layanan 24 Jam</b></h6>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p><img src="/assets/img/professional.svg" alt="professional" /></p>
                            <h6><b>Profesional</b></h6>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs