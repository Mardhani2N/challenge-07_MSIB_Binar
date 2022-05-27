// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getAsyncData } from "../reducers/api-store"
// import Car from "../components/Car"

const Cars = () => {
    // const [driver, setDriver] = useState("")
    // const dispatch = useDispatch()
    // const listCarsJson = useSelector((state) => state.api.cars)

    // useEffect(() => {
    //     dispatch(getAsyncData())
    // }, [dispatch])

    const showBackdrop = () => {
        document.querySelector(".modal-backdrop").style.display = "block"
        document.body.classList.add("modal-open")
    }
    
    const hideBackdrop = (e) => {
        document.querySelector(".modal-backdrop").style.display = "none"
        document.body.classList.remove("modal-open")
        e.target.blur()
    }

    // const onSearch = () => {
    //     console.log(driver)
    //     console.log(listCarsJson)
    //     // lakukan filter disini
    // }
    return (
        <>
            <div className="container mt-4">
                <div id="filter-box" style={{ marginTop: "-80px"}}>
                    <div className="card mb-4" style={{ width: "inherit" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-10 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group1"><label>Tipe Driver</label>
                                            <select id="select-driver" className="form-control" onFocus = {showBackdrop} onBlur = {hideBackdrop}>
                                                <option>Pilih Tipe Driver</option>
                                                <option value="Dengan Sopir">Dengan Sopir</option>
                                                <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                                            </select></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group2"><label>Tanggal</label><input id="input-tanggal"
                                                type="date" className="form-control" placeholder="Pilih Tanggal" onFocus = {showBackdrop} onBlur = {hideBackdrop} /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group3"><label>Waktu Jemput/Ambil</label><input id="input-jemput" type="time" className="form-control" placeholder="Pilih Waktu" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group4"><label>Jumlah Penumpang</label>
                                                <div className="input-group"><input id="input-penumpang" type="number" className="form-control" placeholder="Jumlah Penumpang" />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text bg-white"><img
                                                            src="/assets/img/user-icon.svg" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <div className="form-group" id="form-group5"><label>&nbsp;</label><button id="button-cari"
                                        type="button" className="btn btn-success col-sm-12">Cari Mobil</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                {listCarsJson.map(car => {
                    return (
                        <Car key={car.id}>
                            {car.model}
                        </Car>
                    )
                })}
            </div> */}
            <div className="modal-backdrop background-filter" style={{ display: "none", backgroundColor: "rgba(0,0,0,.5)" }}></div>
        </>

    )
}

export default Cars