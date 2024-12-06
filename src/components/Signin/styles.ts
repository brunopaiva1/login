import styled from "styled-components";

export const Container = styled.div`
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }

    .container1 {
        width: 60%;
        background: blue;
        height: 100vh;
    }

    .container2 {
        width: 40%;
        background: red;
        height: 100vh;
    }
`;

export const Form = styled.form`
    margin: 0 auto;
    padding: 20px;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;
