import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 0px 2px #green;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media(max-width: 750px){
        display: grid;  
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex direction: column;
    align-items: center;

    
    input{
        margin-left: 5px;
    }
`;

export const Label = styled.label`
`;

export const Input = styled.input`
    outline: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-top: 0px;
        margin-left: 20px;
        margin-right: 10px;
        accent-color: black;
    }
`;

 export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    background-color: #98FB98;
 `;