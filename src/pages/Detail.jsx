import React from 'react';
import ExpenseDetail from '../components/detail/ExpenseDetail';
import styled from 'styled-components';

const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function Detail() {
    return (
        <DetailWrapper>
            <ExpenseDetail />
        </DetailWrapper>
    );
}

export default Detail;
