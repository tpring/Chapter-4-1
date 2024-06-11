import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 50px;
    padding: 5rem;
`;

export const HeaderText = styled.span`
    margin-bottom: 70px;
    margin-left: 20px;
    font-size: 40px;
    font-weight: 900;
`;

export const Input = styled.input`
    width: 413px;
    height: 52px;
    margin-left: 20px;
    margin-bottom: 5px;
    border-radius: 60px;
    font-size: 20px;
    text-indent: 15px;
    border: solid 2px #989898;
    background-color: #f9f9f9;

    &:focus {
        border: solid 2px #656565;
        outline: none;
    }
`;

export const Data = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Btn = styled.button`
    background-color: #2ec4b6;
    width: 423px;
    height: 53px;
    border-radius: 50px;
    color: white;
    border: solid 1px transparent;
    font-size: 30px;
    margin: 20px;

    &:hover {
        background: #9be9e1;
        color: #252525;
        border: solid 1px transparent;
    }
`;
