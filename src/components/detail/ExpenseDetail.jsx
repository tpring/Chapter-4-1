import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border-color: transparent;
    border-radius: 10px;
    background-color: lightblue;
    color: white;
`;

function ExpenseDetail({ expenses, setExpenses }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const dateRef = useRef();
    const itemRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    const [expense, setExpense] = useState(null);

    useEffect(() => {
        const fetchExpense = () => {
            const foundExpense = expenses.find((expense) => expense.id === id);
            setExpense(foundExpense);
        };
        fetchExpense();
    }, [id, expenses]);

    const updateExpense = () => {
        const updated = {
            id,
            date: dateRef.current.value,
            item: itemRef.current.value,
            amount: parseFloat(amountRef.current.value),
            description: descriptionRef.current.value,
        };

        const updatedExpenses = expenses.map((expense) => (expense.id === id ? updated : expense));
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);

        alert('수정되었습니다.');
        navigate('/');
    };

    const removeExpense = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            const filteredExpenses = expenses.filter((expense) => expense.id !== id);
            localStorage.setItem('expenses', JSON.stringify(filteredExpenses));
            setExpenses(filteredExpenses);
            navigate('/');
        }
    };

    return (
        <DetailContainer>
            {expense && (
                <>
                    <div>
                        <Input type="date" defaultValue={expense.date} ref={dateRef} required />
                        <Input type="text" defaultValue={expense.item} ref={itemRef} required />
                        <Input type="number" defaultValue={expense.amount} ref={amountRef} required />
                    </div>
                    <li>
                        <Input type="text" defaultValue={expense.description} ref={descriptionRef} />
                    </li>
                    <Button onClick={updateExpense}>수정</Button>
                    <Button onClick={removeExpense}>삭제</Button>
                    <Button onClick={() => navigate('/')}>뒤로가기</Button>
                </>
            )}
        </DetailContainer>
    );
}

export default ExpenseDetail;
