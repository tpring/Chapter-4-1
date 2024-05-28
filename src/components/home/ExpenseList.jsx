import React from 'react';
import styled from 'styled-components';

const List = styled.div`
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

const ExpenseCard = styled.div`
    background-color: rgb(224, 239, 253);
    width: 900px;
    margin: 10px 0;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(178, 188, 197);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const RightCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
`;

const LeftCard = styled.div`
    width: 750px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & > div {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const ExpenseList = ({ filteredExpenses }) => {
    const handleCardClick = (id) => {
        window.location.href = `/detail/${id}`;
    };

    return (
        <List>
            {filteredExpenses.map((expense) => (
                <ExpenseCard key={expense.id} onClick={() => handleCardClick(expense.id)}>
                    <LeftCard>
                        {expense.date}
                        <div>
                            {expense.item} - {expense.description}
                        </div>
                    </LeftCard>
                    <RightCard>{expense.amount}원</RightCard>
                </ExpenseCard>
            ))}
        </List>
    );
};

export default ExpenseList;
