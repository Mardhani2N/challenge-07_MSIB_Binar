class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    withDriver
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.withDriver = withDriver;
    if (this.constructor === Component)
      throw new Error("Error")
  }

  render() {
    return `
    <div class="col-sm-4 col-sm-4 col-sm-4 mt-3">
      <div class="card">
        <div style="margin: 20px 0px 0px 20px">
          <img src="${this.image}" alt="${this.manufacture}" height="225" width="300">
        </div>
        <div class="card-body">
            <p><strong>${this.model} / ${this.type}</strong></p>
            <p><strong>${this.rentPerDay.toLocaleString('id', { style: 'currency', currency: 'IDR' })}/ hari</strong></p>
            <p style="height:90px">${this.description}</p>
            <div class="row">
                <div class="col-sm-8"><p><img src="./assets/img/user-icon.svg">&nbsp;${this.capacity} orang</p></div>
                <div class="col-sm-8"><p><img src="./assets/img/transmission.svg">&nbsp;${this.transmission}</p></div>
                <div class="col-sm-8"><p><img src="./assets/img/calendar.svg"> Tahun&nbsp;${this.year}</p></div>
                <div class="col-sm-8"><p><strong>${this.available}</strong></p></div>
                <span style="margin-left:15px">${this.availableAt}</span>
            </div>
            <p></p>
            <div class="btn-success btn-lg"><center>Pilih Mobil</center></div>
        </div>
      </div>
    </div>
    `;
  }
}

class Car extends Component {

}
