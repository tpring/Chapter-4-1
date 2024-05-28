import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MonthlyList = styled.div`
    background-color: aliceblue;
    width: 1000px;
    margin: 10px 0;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Tab = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? 'lightblue' : 'transparent')};
    color: ${({ isActive }) => (isActive ? 'white' : 'black')};
`;

const MonthlyExpenseList = ({ setFilteredExpenses }) => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const storedMonth = localStorage.getItem('selectedMonth');
    const [selectedMonth, setSelectedMonth] = useState(storedMonth ? parseInt(storedMonth) : months[0]);

    const filterByMonth = (selectedMonth) => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const filtered = savedExpenses.filter((expense) => {
            const expenseMonth = new Date(expense.date).getMonth() + 1;
            return expenseMonth === selectedMonth;
        });
        setFilteredExpenses(filtered);
    };

    useEffect(() => {
        filterByMonth(selectedMonth);
        localStorage.setItem('selectedMonth', selectedMonth.toString());
    }, [selectedMonth, setFilteredExpenses]);

    useEffect(() => {
        const storedMonth = localStorage.getItem('selectedMonth');
        if (storedMonth) {
            setSelectedMonth(parseInt(storedMonth));
        }
    }, []);

    return (
        <MonthlyList>
            {months.map((month) => (
                <Tab key={month} isActive={selectedMonth === month} onClick={() => setSelectedMonth(month)}>
                    {month}월
                </Tab>
            ))}
        </MonthlyList>
    );
};

export default MonthlyExpenseList;
