import styled from 'styled-components';
import { useState } from 'react';
import MonthNavigation from '../components/MonthNavigation';
import ExpenseList from '../components/ExpenseList';
import CreateExpense from '../components/CreateExpense';
import Header from '../components/Header';

const Container = styled.main`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`;

export const Section = styled.section`
    background-color: #ffffff;
    border-radius: 16px;
    padding: 20px;
`;

export default function Home({ expenses, user }) {
    const [month, setMonth] = useState(1);

    const filteredExpenses = expenses.filter((expense) => expense.month === month);

    return (
        <Container>
            <Header />
            <CreateExpense month={month} user={user} />
            <MonthNavigation month={month} setMonth={setMonth} />
            <ExpenseList expenses={filteredExpenses} user={user} />
        </Container>
    );
}
