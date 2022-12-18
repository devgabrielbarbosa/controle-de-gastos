import styled from "styled-components";

export const Table = styled.table`
    max-width: 1120px;
    width: 98%;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 10px;
    display: flex;
    padding: 20px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-buttom: inset;
    padding-bottum: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")} 
    width: ${(props) => (props.width ? props.width + "%" : "auto")} 
`;
