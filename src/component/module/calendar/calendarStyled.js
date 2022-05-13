
import styled from "styled-components";

export const CalendarS = styled.div`
    width: 100%;
    height: 100%;
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
    th,td{
        padding: 0;
        border: 1px solid silver;
        div, a{
            border: 1px solid white;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            text-decoration: none;
           
        }
        a{
            color: black;
        }
    }
`
export const Td_ThisMoon = styled.td`
    cursor: pointer;
    color: black;
    &:hover{
        div{
            border-color: red;
        } 
    }
`
export const Td_ElseMoon = styled.td`
    color: silver;
`
export const Tr_Header = styled.tr`
    height: 50px;
    span{
        font-weight: 700;
        text-transform: capitalize;
        font-size: 1.4em;
    }
    button{
        width: 100%;
        height: 100%;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        font-size: 1em;
    }
    th{
        position:relative;
        div{
            position: absolute;
            top;0;left:0;
        }
    }

`