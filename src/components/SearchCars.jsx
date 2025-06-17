import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const CarSearchInput = styled.input.attrs({
    placeholder: "Type for car searching...",
    type: "search",
})`
    border-radius: 25px;
    outline: none;
    font-size: 22px;
    padding: 15px;
    border: none;
    width: 55%;
    height: 35%;
    position: relative;
    background-color: white;
    border: 3px solid #8b4fc7;
`

const CarSearchContainer = styled.div`
    margin-top: 1%;
    width: 100%;
    position: fixed;
    height: 15vh;
    display: flex;
    justify-content: center;
`
//todo ts interface for cars it will be better
export default function SearchCars({ carsForRender, setSearchCarsResult, allCars }) {

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchCarsResult(allCars);
        } else {
            //todo if empty see from all cars
            setSearchCarsResult(carsForRender.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase())));
        }
    }, [searchQuery])

    return (
        <CarSearchContainer>
            <CarSearchInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </CarSearchContainer>
    );
}