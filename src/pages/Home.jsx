import React from 'react';
import ExpenseForm from '../components/home/ExpenseForm';
import ExpenseList from '../components/home/ExpenseList';
import MonthlyExpenseList from '../components/home/MonthlyExpenseList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    const expenses = useSelector((state) => state.expenses);

    return (
        <HomeWrapper>
            <ExpenseForm />
            <MonthlyExpenseList />
            <ExpenseList expenses={expenses} />
        </HomeWrapper>
    );
};

export default Home;
