import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setFilter } from "../reducers/api-store"

const FilterBox = () => {

    const dispatch = useDispatch()

    const [driver, setDriver] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [waktu, setWaktu] = useState("")
    const [penumpang, setPenumpang] = useState("")
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(setFilter(data));
    }, [dispatch, data])

    const onSearch = (e) => {
        e.preventDefault()
        setData({
            driver: driver,
            tanggal: tanggal,
            waktu: waktu,
            penumpang: parseInt(penumpang),
        });
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
                                                <option value="1">Dengan Sopir</option>
                                                <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                                            </select></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group2"><label>Tanggal</label><input id="input-tanggal"
                                                type="date" className="form-control" placeholder="Pilih Tanggal" onChange={(e) => setTanggal(e.target.value)} /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group3"><label>Waktu Jemput/Ambil</label><input
                                                id="input-jemput" type="time" className="form-control" placeholder="Pilih Waktu" onChange={(e) => setWaktu(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group" id="form-group4"><label>Jumlah Penumpang</label>
                                                <div className="input-group"><input id="input-penumpang" type="number"
                                                    className="form-control" placeholder="Jumlah Penumpang" onChange={(e) => setPenumpang(e.target.value)} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text bg-white"><img
                                                            src="/assets/img/user-icon.svg" alt="/" /></div>
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
        </>
    )
}

export default FilterBox
