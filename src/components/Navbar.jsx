import { styled } from 'styled-components';
import { navElements } from '../data';
import NavElement from './NavElement';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchCars from './SearchCars';

const NavContainer = styled.div`
  background-color: #8b4fc7;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: white;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  position: relative;
  left: 4%;
`

const NavElementsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-right: 3%;
`

const AppName = styled.div`
  color: white;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: relative;
  right: 4%;
`

export default function Navbar({ carsForRender, setSearchCarsResult, allCars }) {
  return (
    <div style={{ position: 'fixed ', width: "100%" }}>
      <NavContainer>
        <Logo>@Temich 719</Logo>
        <NavElementsContainer>
          {navElements.map(item => <NavElement key={item} name={item} />)}
        </NavElementsContainer>
        <AppName>T-Cars</AppName>
      </NavContainer>
      <SearchCars carsForRender={carsForRender} setSearchCarsResult={setSearchCarsResult} allCars={allCars} />
    </div>
  );
}
