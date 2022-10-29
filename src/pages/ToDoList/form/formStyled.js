import styled from "styled-components"


export const InputForm = styled.input`
    line-height: 30px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
`

export const SubmitForm = styled.input`
    background-color: rgb(14, 160, 41);
    color: #fff;
    cursor: pointer;
    padding: 9px 20px;
    border: none;
    border-radius: 10px;
    transition: all .3s;
    margin-right: 10px;

    :hover{
        background-color: #008118;
        transform: scale(1.1);
    }
`