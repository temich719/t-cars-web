import { styled, keyframes } from 'styled-components'
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from 'react';

const CarContainer = styled.div`
    width: 100%;
    height: 28vh;
    border-bottom: 2px solid #d3cece;
    display: flex;
    align-items: center;
    margin: 0.5% 0 0.5 0%;

    &:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }
`

const CarImageContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CarImage = styled.img`
    width: 80%;
    height: 90%;
    border-radius: 20px;

    &:hover {
        cursor: pointer;
    }
`

const CarData = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const CarMainData = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40%;
`

const CarDescription = styled.div`
    height: 30%;
    width: 100%;
    font-size: 2rem;
    color: grey;
    display: flex;
    justify-content: space-between;
`

const CarName = styled.div`
    color: #8b4fc7;
    font-size: 3rem;

    &:hover {
        cursor: pointer;
        color: red;
    }
`

const CarPrice = styled.div`
    color: #19b619;
    font-size: 2rem;
    margin-right: 5%;
`

const favoriteJumpAnim = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
`

const AnimatedLikeIcon = styled(FcLike)`
    font-size: 40px;
    margin-right: 8%;
    animation: ${favoriteJumpAnim} 0.3s ease 1;
`

//todo icon z-index
export default function CarElement({ changeIsFavoriteByCarId, ...props }) {

    const [isFavorite, setIsFavorite] = useState(props.car.isFavorite);

    const addCarToFavorites = (carId) => {
        setIsFavorite(true);
        changeIsFavoriteByCarId(carId, true);
    }

    const deleteCarFromFavorites = (carId) => {
        setIsFavorite(false)
        changeIsFavoriteByCarId(carId, false)
    }

    return (
        <CarContainer>
            <CarImageContainer>
                <CarImage src={props.car.imagePath} />
            </CarImageContainer>
            <CarData>
                <CarMainData>
                    <CarName>{props.car.name}</CarName>
                    <CarPrice>${props.car.price}</CarPrice>
                </CarMainData>
                <CarDescription>
                    {props.car.description}
                    {props.car.isFavorite === false ?
                        <FcLikePlaceholder
                            style={{ fontSize: "40px", marginRight: "8%" }}
                            onClick={() => addCarToFavorites(props.car.id)}
                        /> :
                        <AnimatedLikeIcon onClick={() => deleteCarFromFavorites(props.car.id)} />
                    }
                </CarDescription>
            </CarData>
        </CarContainer>
    )
}