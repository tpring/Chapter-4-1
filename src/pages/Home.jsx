// Home.js
import React, { useState } from 'react';
import ExpenseForm from '../components/home/ExpenseForm';
import ExpenseList from '../components/home/ExpenseList';
import MonthlyExpenseList from '../components/home/MonthlyExpenseList';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    return (
        <HomeWrapper>
            <ExpenseForm />
            <MonthlyExpenseList setFilteredExpenses={setFilteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses} />
        </HomeWrapper>
    );
};

export default Home;
