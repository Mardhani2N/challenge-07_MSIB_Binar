import Car from "../components/Car";
import { useEffect, useState} from "react"
import { useDispatch} from "react-redux"
import { setFilter } from "../reducers/api-store"


const Cars = () => {

    const dispatch = useDispatch()

    const [driver, setDriver ] = useState("");
    const [tanggal, setTanggal ] = useState("");
    const [ambil, setAmbil ] = useState("");
    const [penumpang, setPenumpang ] = useState("");

    const [data, setData] = useState({});
    
    useEffect(() => {
        dispatch(setFilter(data));
    }, [dispatch, data])

    function showBackdrop() {
        document.querySelector(".modal-backdrop").style.display = "block"
        document.body.classList.add("modal-open")
    }
    
    function hideBackdrop(e) {
        document.querySelector(".modal-backdrop").style.display = "none"
        document.body.classList.remove("modal-open")
        e.target.blur()
    }

    const onSearch = (e) => {
        // lakukan filter disini
        e.preventDefault();
        setData({
            driver: driver,
            tanggal: tanggal,
            ambil: ambil,
            penumpang: parseInt(penumpang),
        })
        
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
                                                id="select-driver" className="form-control" onFocus={showBackdrop} onBlur={hideBackdrop} onChange={(e) => setDriver(e.target.value)}>
                                                <option>Pilih Tipe Driver</option>
                                                <option value="Dengan Sopir">Dengan Sopir</option>
                                                <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                                            </select></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group2"><label>Tanggal</label><input id="input-tanggal"
                                                type="date" className="form-control" placeholder="Pilih Tanggal" onFocus={showBackdrop} onBlur={hideBackdrop} onChange={(e) => setTanggal(e.target.value)} /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group3"><label>Waktu Jemput/Ambil</label><input
                                                id="input-jemput" type="time" className="form-control" placeholder="Pilih Waktu" onChange={(e) => setAmbil(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group4"><label>Jumlah Penumpang</label>
                                                <div className="input-group"><input id="input-penumpang" type="number"
                                                    className="form-control" placeholder="Jumlah Penumpang" onChange={(e) => setPenumpang(e.target.value)} />
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
                                        type="button" className="btn btn-success col-sm-12" onClick={onSearch}>Cari Mobil</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Car />
            <div className="modal-backdrop background-filter" style={{ display: "none", backgroundColor: "rgba(0,0,0,.5)" }}></div>
            
        </>
    )
}

export default Cars
