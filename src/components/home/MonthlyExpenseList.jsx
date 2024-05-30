import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

const List = styled.div`
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
    background-color: ${({ active }) => (active ? 'lightblue' : 'transparent')};
    color: ${({ active }) => (active ? 'white' : 'black')};
`;

const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const MonthlyExpenseList = () => {
    const storedMonth = localStorage.getItem('selectedMonth');
    const [selectedMonth, setSelectedMonth] = useState(storedMonth ? parseInt(storedMonth) : months[0]);

    const filterByMonth = (expenses, month) => {
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
        <List>
            {months.map((month, index) => (
                <Tab key={index} active={selectedMonth === month} onClick={() => setSelectedMonth(month)}>
                    {month}월
                </Tab>
            ))}
        </List>
    );
};

export default MonthlyExpenseList;
