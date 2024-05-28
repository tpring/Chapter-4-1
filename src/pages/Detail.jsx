import React from 'react';
import ExpenseDetail from '../components/detail/ExpenseDetail';
import styled from 'styled-components';

const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function Detail({ expenses, setExpenses }) {
    return (
        <DetailWrapper>
            <ExpenseDetail expenses={expenses} setExpenses={setExpenses} />
        </DetailWrapper>
    );
}

export default Detail;
