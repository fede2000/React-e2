import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { 
    LinkContainerStyled,
    LogoStyled,
    NavbarContainerStyled, 
    TitleStyled 
} from './NavbarStyles'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <NavbarContainerStyled>
        <LogoStyled onClick={() => navigate('/Home')}>
            <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" alt="React" />
            <TitleStyled>E2 - React</TitleStyled>
        </LogoStyled>
        <LinkContainerStyled>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/ToDoList'>ToDo List</NavLink>
            <NavLink to='/fetch'>Fetch</NavLink>
            <NavLink to='/'>Home</NavLink>
        </LinkContainerStyled>

    </NavbarContainerStyled>
  )
}

export default Navbar