import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
`;

export const InputGro = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        margin-bottom: 5px;
        font-size: 14px;
        color: #333;
        text-align: left;
    }

    input {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }
`;

export const ButtonGro = styled.div`
    display: flex;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;
export const DeleteButton = styled.button`
    padding: 10px 20px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #cc0000;
    }
`;

export const BackButton = styled(Button)`
    background-color: #6c757d;

    &:hover {
        background-color: #5a6268;
    }
`;
