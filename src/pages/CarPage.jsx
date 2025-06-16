import { useState } from "react";
import { carList } from '../data'
import Navbar from "../components/Navbar";
import CarList from "../components/CarList";

export default function CarPage() {

    const [cars, setCars] = useState(carList);

    return (
        <>
            <Navbar carsForRender={cars} setSearchCarsResult={setCars} allCars={carList} />
            <CarList carList={cars} />
        </>
    );
}