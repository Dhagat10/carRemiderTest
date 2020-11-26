import axios from 'axios';


export const carRegister = newCar => {
    return axios
    .post('cars/car_register', {
        license: newCar.license,
        engine_oil: newCar.engine_oil,
        auto_oil: newCar.auto_oil,
        insurance: newCar.insurance,
        tyre: newCar.tyre,
        servicing: newCar.servicing,
        car_washing: newCar.car_washing,

    })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
