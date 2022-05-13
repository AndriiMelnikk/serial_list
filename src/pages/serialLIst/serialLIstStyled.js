import styled from "styled-components";

// BlockList

export const BlockListS = styled.div`
    h2{
        text-align: center;
        margin: 30px 0;
        font-weight: 300;
        font-size: 1em;
    }
    padding: 0 20px;
    max-width: 600px;
    margin: 0 auto;
    ul{
        li{
            margin: 30px 0;
        }
    }
`
export const MoreText = styled.div`
p{
    cursor: pointer;
    font-size: 0.8em;
    text-align: center;
    color: silver;
    svg{
        color: black;
        margin-bottom: -3px;
        margin-left: 5px;
    }
}
`

// Serial
export const SerialS = styled.li`
    width: 100%;
    height: 130px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0 10px;
    >div{
        position:relative;
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
export const TextSerial = styled.div`
    display: grid;
    grid-template-rows: 1fr 40px;
    h3{
        font-weight: 400;
    }
    p{
        padding: 5px 0;
        font-weight: 200;  
        font-size: 0.7em;
    }
`

export const InfoSerial = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    p
    {
        font-size: 0.8em;
    }
    
`

export const ButtonAdd = styled.div`
    height: 60px;
    text-align: center;
    button{
        margin: 20px auto 10px auto;
        height: 30px;
        padding: 0 15px;
        border: 1px solid silver;
        background-color: white;
        border-radius: 10px;
        transition: 0.3s;
        &:hover{
            background-color: silver;
            color:rgb(74, 68, 68);
        }
    }
`