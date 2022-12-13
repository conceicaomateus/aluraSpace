import styled from "styled-components";

export const Container = styled.li`
    background-color: #041833;
    border-radius: 20px;
    height: 280px;
    width: 285px;
    margin-right: 1rem;
    margin-bottom: 1.35rem;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.025);
      transition: 0.18s;
    }
`;

export const Imagem =  styled.img`
    height: 75%;
    width: 100%;
`; 

export const Title = styled.p`
    margin: 0;
    padding: 0 16px;
    font-size: 1.25rem;
    color: #d9d9d9;
    font-weight: 700;
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    width: 100%;

    p {
        margin: 0;
        margin-top: 0.5rem;
        color: #9d9d9d;
    }

    span {
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    img {
        cursor: pointer;
    }
    }

`;