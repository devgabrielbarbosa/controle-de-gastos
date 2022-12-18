import React from "react";
import * as C from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa"

const GridItem = ({item, onDelete}) =>{
    console.log(Number(item.amount).toFixed(2).replace('.', ','))
    return(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>R$ {Number(item.amount).toFixed(2).replace('.', ',')}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                        <FaRegArrowAltCircleDown color="red"/>
                    ) : (
                        <FaRegArrowAltCircleUp color="green" />
                    )
                }            
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    )
};

export default GridItem;