import styled from 'styled-components';

export const TareaContainerStyled = styled.div`
  width: 50%;
  background-color: #cad2c5;
  padding: 10px;
  margin-top: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TareaButtonEditarStyled = styled.button`
    background-color: white;
    color: #008118;
    cursor: pointer;
    padding: 7px;
    border-radius: 50%;
    border: 1px solid #008118;
    transition: all .3s;
    margin-right: 10px;
    :hover{
        background-color: #008118;
        color: white;
        border-radius: 50%;
        border: 1px solid white;
        transition: all .3s;
        margin-right: 10px;
    }
`;
export const TareaButtonEliminarStyled = styled.button`
    background-color: white;
    color: #bc0909;
    padding: 7px;
    border: 1px solid #bc0909;
    border-radius: 50%;
    margin-right: 10px;
    transition: all .1s;
    :hover{
        background-color: #bc0909;
        transform: scale(1.1);
        color: white;
    }
`;