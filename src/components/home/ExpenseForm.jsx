import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/slices/expensesSlice';

const Form = styled.div`
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
    width: 200px;
    margin-right: 5px;
`;

const Label = styled.label`
    display: inline-block;
    width: 200px;
    margin-right: 13px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border-color: transparent;
    border-radius: 10px;
    background-color: lightblue;
    color: white;
`;

const ExpenseForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newExpense = {
            id: uuidv4(),
            date: formData.get('date'),
            item: formData.get('item'),
            amount: parseFloat(formData.get('amount')),
            description: formData.get('description'),
        };

        dispatch(addExpense(newExpense));
        e.target.reset();
    };

    return (
        <Form>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>날짜</Label>
                    <Label>항목</Label>
                    <Label>금액</Label>
                    <Label>내용</Label>
                </div>
                <div>
                    <Input type="date" name="date" required />
                    <Input type="text" name="item" required />
                    <Input type="number" name="amount" required />
                    <Input type="text" name="description" />
                    <Button type="submit">지출 등록</Button>
                </div>
            </form>
        </Form>
    );
};

export default ExpenseForm;
