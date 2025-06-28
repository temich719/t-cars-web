import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

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
    gap: 20px;
`

const SortCarsButton = styled.button`
    width: 5%;
    height: 40%;
    font-size: 24px;
    color: black;
    background-color: whitesmoke;
    border-radius: 25px;
    cursor: pointer;
`

//todo ts interface for cars it will be better
//todo sort with search doesn't work well together
export default function SearchCars({ carsForRender, setSearchCarsResult, allCars, sortCars }) {

    const ASC = "asc";
    const DESC = "desc";

    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const sortCarsByDirection = (direction) => {
        if (direction === ASC) {
            setSortOrder(ASC);
            sortCars(ASC);
        } else {
            setSortOrder(DESC);
            sortCars(DESC);
        }
    }

    const findCarByQuery = (cars, query) => {
        return cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));
    }

    const onChangeQueryHandler = (e) => {
        setSortOrder("");
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchCarsResult(allCars);
        } else {
            carsForRender.length === 0
                ? setSearchCarsResult(findCarByQuery(allCars, searchQuery))
                : setSearchCarsResult(findCarByQuery(carsForRender, searchQuery));
        }
    }, [searchQuery])

    return (
        <CarSearchContainer>
            <SortCarsButton
                style={{
                    backgroundColor: sortOrder === ASC ? "#b1abab " : "white",
                    border: sortOrder === ASC ? "none" : "1px solid black",
                    color: sortOrder === ASC ? "white" : "black"
                }}
                onClick={() => sortCarsByDirection(ASC)}
            >
                <BsArrowUp />
            </SortCarsButton>
            <CarSearchInput value={searchQuery} onChange={onChangeQueryHandler} />
            <SortCarsButton
                style={{
                    backgroundColor: sortOrder === DESC ? "#b1abab " : "white",
                    border: sortOrder === DESC ? "none" : "1px solid black",
                    color: sortOrder === DESC ? "white" : "black"
                }}
                onClick={() => sortCarsByDirection(DESC)}
            >
                <BsArrowDown />
            </SortCarsButton>
        </CarSearchContainer>
    );
}