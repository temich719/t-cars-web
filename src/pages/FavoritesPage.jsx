import { useState } from "react";
import { carList } from '../data'
import Navbar from "../components/Navbar";
import CarList from "../components/CarList";

export default function FavoritesPage() {

    const [filteredCars, setFilteredCars] = useState(
        carList.filter(car => car.isFavorite === true)
    );

    return (
        <>
            <Navbar
                carsForRender={filteredCars}
                setSearchCarsResult={setFilteredCars}
                allCars={carList.filter(car => car.isFavorite === true)}
            />
            <CarList carList={filteredCars} />
        </>
    );
}