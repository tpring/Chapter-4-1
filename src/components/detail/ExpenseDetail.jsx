import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateExpense, removeExpense } from '../../redux/slices/expensesSlice';

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
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);
    const expense = expenses.find((expense) => expense.id === id);

    const dateRef = useRef();
    const itemRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    const handleUpdate = () => {
        const updated = {
            id,
            date: dateRef.current.value,
            item: itemRef.current.value,
            amount: parseFloat(amountRef.current.value),
            description: descriptionRef.current.value,
        };

        dispatch(updateExpense(updated));
        alert('수정되었습니다.');
        navigate('/');
    };

    const handleRemove = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            dispatch(removeExpense(id));
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
                        <Button onClick={handleUpdate}>수정</Button>
                        <Button onClick={handleRemove}>삭제</Button>
                        <Button onClick={() => navigate('/')}>뒤로가기</Button>
                    </div>
                </>
            )}
        </DetailContainer>
    );
}

export default ExpenseDetail;
