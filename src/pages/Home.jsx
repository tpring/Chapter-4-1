import { useState, useEffect } from 'react';
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

const Home = ({ setExpenses }) => {
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(savedExpenses);
    }, [setExpenses]);

    return (
        <HomeWrapper>
            <ExpenseForm setExpenses={setExpenses} />
            <MonthlyExpenseList setFilteredExpenses={setFilteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses} />
        </HomeWrapper>
    );
};

export default Home;
