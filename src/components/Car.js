import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsyncData } from "../reducers/api-store"

const Car = () => {
    const dispatch = useDispatch()
    const listCarsJson = useSelector((state) => state.api.filterCars)

    useEffect(() => {
        dispatch(getAsyncData())
    }, [dispatch])

    return (
        <>
        <div className="row" id="cars-list">
            {listCarsJson((car) => {
                return(
                    <div className="col-sm-4 col-sm-4 col-sm-4 mt-3">
                    <div className="card">
                        <div style={{margin: "20px 0px 0px 20px"}}>
                            <img src="{car.image}" alt="{car.manufacture}" style={{height:"225px", width:"300px" }}/>
                        </div>
                        <div className="card-body">
                            <p><strong>{car.model} / {car.type}</strong></p>
                            <p><strong>{car.rentPerDay}/ hari</strong></p>
                            <p style={{height:"90px"}}>{car.description}</p>
                            <div className="row">
                                <div className="col-sm-8"><p><img src="/assets/img/user-icon.svg" />&nbsp;{car.capacity} orang</p></div>
                                <div className="col-sm-8"><p><img src="/assets/img/transmission.svg" />&nbsp;{car.transmission}</p></div>
                                <div className="col-sm-8"><p><img src="/assets/img/calendar.svg" /> Tahun&nbsp;{car.year}</p></div>
                                <div className="col-sm-8"><p><strong>{car.available}</strong></p></div>
                                <span style={{marginLeft:"15px"}}>{car.availableAt}</span>
                            </div>
                            <p></p>
                            <div className="btn-success btn-lg"><center>Pilih Mobil</center></div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    );
}

export default Car