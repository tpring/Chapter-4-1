import React from 'react';
import ExpenseDetail from '../components/detail/ExpenseDetail';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function Detail() {
    const { id } = useParams();
    const expenses = useSelector((state) => state.expenses.expenses);
    const expense = expenses.find((expense) => expense.id === id);

    return (
        <DetailWrapper>
            <ExpenseDetail expense={expense} />
        </DetailWrapper>
    );
}

export default Detail;
