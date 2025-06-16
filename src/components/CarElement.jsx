import { styled } from 'styled-components'

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

export default function CarElement(props) {
    return (
        <CarContainer>
            <CarImageContainer>
                <CarImage src={props.car.imagePath} />
            </CarImageContainer>
            <CarData>
                <CarMainData>
                    <CarName>{props.car.name}</CarName>
                    <CarPrice>{props.car.price}</CarPrice>
                </CarMainData>
                <CarDescription>
                    {props.car.description}
                </CarDescription>
            </CarData>
        </CarContainer>
    )
}