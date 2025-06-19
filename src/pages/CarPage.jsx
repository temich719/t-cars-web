import { useState } from "react";
import { carList } from '../data'
import Navbar from "../components/Navbar";
import CarList from "../components/CarList";

export default function CarPage() {

    const [cars, setCars] = useState(carList);

    const changeIsFavoriteByCarId = (carId, isFavorite) => {
        let buffCars = cars;
        for (let car of buffCars) {
            if (car.id === carId) {
                car.isFavorite = isFavorite;
                break;
            }
        }

        setCars(buffCars);
    }

    const sortCars = (isAsc) => {
        const sortedCars = [...cars].sort((a, b) => {
            return isAsc === "asc" ? a.price - b.price : b.price - a.price;
        });

        setCars(sortedCars);
    }

    return (
        <>
            <Navbar carsForRender={cars} setSearchCarsResult={setCars} allCars={carList} sortCars={sortCars} />
            <CarList carList={cars} changeIsFavoriteByCarId={changeIsFavoriteByCarId} />
        </>
    );
}