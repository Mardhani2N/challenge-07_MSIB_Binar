import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getAsyncData } from "../reducers/api-store"
import Car from "../components/Car"

const Cars = () => {

    const dispatch = useDispatch()
    const listCarsJson = useSelector((state) => state.api.cars)

    const [driver, setDriver] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [ambil, setAmbil] = useState("")
    const [penumpang, setPenumpang] = useState("")

    useEffect(() => {
        dispatch(getAsyncData())
    }, [dispatch])
    
    const onSearch = (e) => {
        // lakukan filter disini
        console.log(driver)
        console.log(ambil)
        console.log(tanggal)
        console.log(penumpang)
        console.log(listCarsJson)
    }

    return (
        <>  
            <div className="container mt-4" >
                <div id="filter-box" style={{ marginTop: "-80px" }}>
                    <div className="card mb-4" style={{ width: "inherit" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-10 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group1"><label>Tipe Driver</label><select
                                                id="select-driver" className="form-control" onChange={(e) => setDriver(e.target.value)} >
                                                <option>Pilih Tipe Driver</option>
                                                <option value="Dengan Sopir">Dengan Sopir</option>
                                                <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                                            </select></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group2"><label>Tanggal</label><input id="input-tanggal"
                                                type="date" className="form-control" placeholder="Pilih Tanggal" onChange={(e) => setTanggal(e.target.value)}  /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group3"><label>Waktu Jemput/Ambil</label><input
                                                id="input-jemput" type="time" className="form-control" placeholder="Pilih Waktu" onChange={(e) => setAmbil(e.target.value)}  />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group4"><label>Jumlah Penumpang</label>
                                                <div className="input-group"><input id="input-penumpang" type="number"
                                                    className="form-control" placeholder="Jumlah Penumpang" onChange={(e) => setPenumpang(e.target.value)} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text bg-white"><img
                                                            src="/assets/img/user-icon.svg" alt="/"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <div className="form-group" id="form-group5"><label>&nbsp;</label><button id="button-cari"
                                        type="button" className="btn btn-success col-sm-12" onClick={onSearch}>Cari Mobil</button></div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginLeft: "5%", marginRight: "5%" }}>
                {listCarsJson.map(car => {
                    return (
                        <Car key={car.id}>
                            <div>
                                <img src={car.image} alt="/" style={{ height: "210px", width: "280px" }} />
                            </div>
                            <p style={{ fontWeight: "bold", marginTop:"20px" }}>{car.model} / {car.type}</p>
                                <p style={{ fontWeight: "bold" }}>{car.rentPerDay}/ hari</p>
                                <p style={{ height: "60px" }}>{car.description}</p>
                                <div className="row">
                                    <div className="col-sm-8"><p><img src="/assets/img/user-icon.svg" alt="/" />&nbsp;{car.capacity} orang</p></div>
                                    <div className="col-sm-8"><p><img src="/assets/img/transmission.svg" alt="/" />&nbsp;{car.transmission}</p></div>
                                    <div className="col-sm-8"><p><img src="/assets/img/calendar.svg" alt="/" /> Tahun&nbsp;{car.year}</p></div>
                                    <span style={{ marginLeft: "15px" }}>{car.availableAt}</span>
                                </div>
                                <p></p>
                                <div className="btn-success btn-lg"><center>Pilih Mobil</center></div>
                        </Car>
                    )
                })}                
            </div>
        </>
    )
}

export default Cars
