import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    padding: 22px 20px;
    width: 92%;
    height: 50px;
`;

export const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;

    & img{
        width: 80px;
        margin-top: 13px;
    }
`;

export const TitleStyled= styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: white;
`

export const LinkContainerStyled = styled.div`
    display: flex;
    color: white;
    gap: 45px;
`