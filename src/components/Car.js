import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsyncData } from "../reducers/api-store"

const Car = () => {

  const dispatch = useDispatch()

  const listCarsJson = useSelector((state) => state.api.cars)
  const filter = useSelector((state) => state.api.filter)

  const listFilteredCars = []
  function Carsfilter() {
    let driverFilter = ""
    if (filter.driver === "1") {
      driverFilter = true
    } else {
      driverFilter = false
    }
    for (let i in listCarsJson) {
      let car = listCarsJson[i]
      let dateConversion = new Date(car.availableAt)
      if (
        car.available === true &&
        dateConversion <= new Date(filter.tanggal) &&
        car.capacity >= filter.penumpang &&
        car.driver === driverFilter
      ) {
        listFilteredCars.push(listCarsJson[i])
      }
    }
  }

  Carsfilter()

  useEffect(() => {
    dispatch(getAsyncData())
  }, [dispatch])

  return (
    <>
      <div className="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
        {listFilteredCars.map(car => {
          return (
            <div className="col-sm-4 col-sm-4 col-sm-4 mt-3" id="card-car" key={car.id}>
              <div className="card" style={{ width: "330px" }} >
                <div className="card-body" style={{ marginLeft: "0px" }}>
                  <div>
                    <img src={car.image} alt="/" style={{ height: "210px", width: "290px" }} />
                  </div>
                  <p style={{ fontWeight: "bold", marginTop: "20px" }}>{car.model} / {car.type}</p>
                  <p style={{ fontWeight: "bold" }}>{car.rentPerDay}/ hari</p>
                  <p style={{ height: "75px" }}>{car.description}</p>
                  <div className="row">
                    <div className="col-sm-8"><p><img src="/assets/img/user-icon.svg" alt="/" />&nbsp;{car.capacity} orang</p></div>
                    <div className="col-sm-8"><p><img src="/assets/img/transmission.svg" alt="/" />&nbsp;{car.transmission}</p></div>
                    <div className="col-sm-8"><p><img src="/assets/img/calendar.svg" alt="/" /> Tahun&nbsp;{car.year}</p></div>
                    <span style={{ marginLeft: "15px" }}>{car.availableAt}</span>
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


