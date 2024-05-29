import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useExpense } from '../../context/ExpenseContext';
import styled from 'styled-components';

const DetailContainer = styled.div`
    background-color: aliceblue;
    width: 1000px;
    margin: 10px 0;
    padding: 1rem;
    border-radius: 10px;
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
const Label = styled.label`
    display: inline-block;
    padding: 10px;
    width: 300px;
    margin-left: 13px;
`;
const DInput = styled.textarea`
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 960px;
    height: 100px;
    white-space: pre-wrap;
`;

const DLabel = styled.label`
    display: inline-block;
    padding: 10px;
    width: 960px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border-color: transparent;
    border-radius: 10px;
    background-color: lightblue;
    color: white;
    margin-right: 10px;
    margin-top: 10px;
`;

function ExpenseDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const dateRef = useRef();
    const itemRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    const [expense, setExpense] = useState(null);
    const { expenses, setExpenses } = useExpense();

    useEffect(() => {
        const foundExpense = expenses.find((expense) => expense.id === id);
        setExpense(foundExpense);
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
        setExpenses(updatedExpenses);

        alert('수정되었습니다.');
        navigate('/');
    };

    const removeExpense = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            const filteredExpenses = expenses.filter((expense) => expense.id !== id);
            setExpenses(filteredExpenses);
            navigate('/');
        }
    };

    return (
        <DetailContainer>
            {expense && (
                <>
                    <div>
                        <Label>날짜</Label>
                        <Label>항목</Label>
                        <Label>금액</Label>
                    </div>
                    <div>
                        <Input type="date" defaultValue={expense.date} ref={dateRef} required />
                        <Input type="text" defaultValue={expense.item} ref={itemRef} required />
                        <Input type="number" defaultValue={expense.amount} ref={amountRef} required />
                    </div>
                    <div>
                        <DLabel>내용</DLabel>
                        <DInput type="text" defaultValue={expense.description} ref={descriptionRef} />
                    </div>
                    <div>
                        <Button onClick={updateExpense}>수정</Button>
                        <Button onClick={removeExpense}>삭제</Button>
                        <Button onClick={() => navigate('/')}>뒤로가기</Button>
                    </div>
                </>
            )}
        </DetailContainer>
    );
}

export default ExpenseDetail;
