import { styled } from 'styled-components';
import { navElements } from '../data';
import NavElement from './NavElement';

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
`

const AppName = styled.div`
  color: white;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: relative;
  right: 4%;
`

export default function Navbar() {
  return (
    <NavContainer>
      <Logo>@Temich 719</Logo>
      <NavElementsContainer>
        {navElements.map(item => <NavElement key={item} name={item} />)}
      </NavElementsContainer>
      <AppName>T-Cars</AppName>
    </NavContainer>
  );
}
