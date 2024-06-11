import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

export default function Detail({ expenses, setExpenses }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const selectedExpense = expenses.find((element) => element.id === id);

    const [date, setDate] = useState(selectedExpense.date);
    const [item, setItem] = useState(selectedExpense.item);
    const [amount, setAmount] = useState(selectedExpense.amount);
    const [description, setDescription] = useState(selectedExpense.description);

    const editExpense = async () => {
        const updatedExpense = {
            ...selectedExpense,
            date,
            item,
            amount,
            description,
        };

        await axios.patch(`http://localhost:5000/expenses/${id}`, updatedExpense);

        const newExpenses = expenses.map((expense) => (expense.id !== id ? expense : updatedExpense));

        setExpenses(newExpenses);
        navigate('/');
    };
    const deleteExpense = async () => {
        const newExpenses = expenses.filter((expense) => expense.id !== id);
        await axios.delete(`http://localhost:5000/expenses/${id}`);
        setExpenses(newExpenses);
        navigate('/');
    };

    return (
        <Container>
            <Header />
            <InputGroup>
                <label htmlFor="date">날짜</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="item">항목</label>
                <input
                    type="text"
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="지출 항목"
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="amount">금액</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="지출 금액"
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="description">내용</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="지출 내용"
                />
            </InputGroup>
            <ButtonGroup>
                <Button onClick={editExpense}>수정</Button>
                <Button danger="true" onClick={deleteExpense}>
                    삭제
                </Button>
                <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
            </ButtonGroup>
        </Container>
    );
}

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
`;

const InputGroup = styled.div`
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

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: ${(props) => (props.danger ? '#ff4d4d' : '#007bff')};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${(props) => (props.danger ? '#cc0000' : '#0056b3')};
    }
`;

const BackButton = styled(Button)`
    background-color: #6c757d;

    &:hover {
        background-color: #5a6268;
    }
`;
