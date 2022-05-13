import styled from "styled-components";

export const HomeS = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1.5fr 1fr;
`
export const Header = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    padding: 0 40px;
    grid-template-rows:3fr 1fr;
    > div{
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        &:nth-child(1){
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom:30px;
        }
        img{
            width: 50%;
            object-fit: scale-down;

        } 
        h3{
            font-weight: 300;
        }
    }
`