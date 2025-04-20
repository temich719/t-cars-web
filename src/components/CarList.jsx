import { styled } from 'styled-components'
import { carList } from '../data'
import CarElement from './CarElement'

const CarsCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const CarsCard = styled.div`
    width: 70%;
    height: auto;
    margin: 2% 0;
    border: none;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function CarList() {
    return (
        <CarsCardContainer>
            <CarsCard>
                {carList.map(car => <CarElement key={car.name} car={car} />)}
            </CarsCard>
        </CarsCardContainer>
    )
}