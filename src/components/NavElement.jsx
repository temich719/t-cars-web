import { styled } from 'styled-components'

const NavButton = styled.div`
    background-color: inherit;
    color: white;
    font-size: 28px;
    transition: 0.5s ease;

    &:hover {
        cursor: pointer;
        opacity: 70%;
        text-decoration: underline;
    }
`

export default function NavElement({ name }) {
    return (
        <NavButton>{name}</NavButton>
    )
}