import { Section } from '../pages/Home';
import styled from 'styled-components';
import { useState } from 'react';
import { create } from '../lib/api/expenses';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function CreateExpense({ month, user }) {
    const [newDate, setNewDate] = useState(`2024-${String(month).padStart(2, '0')}-01`);
    const [newItem, setNewItem] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const queryClient = new QueryClient();
    const navigat = useNavigate();

    const mutation = useMutation({
        mutationFn: create,
        onSuccess: () => {
            queryClient.invalidateQueries(['expenses']);
            navigat(0);
        },
    });

    const handleAddExpense = async () => {
        // const { nickname, id: userId } = user;
        // const response = await create({ newDate, newItem, newAmount, newDescription, nickname, userId });
        // console.log('가게부 입력 응답 :', response);
        const { id: userId } = user;

        mutation.mutate({ newDate, newItem, newAmount, newDescription, userId });

        setNewDate(`2024-${String(month).padStart(2, '0')}-01`);
        setNewItem('');
        setNewAmount('');
        setNewDescription('');
        // window.location.reload();
    };

    return (
        <Section>
            <InputRow
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddExpense();
                }}
            >
                <InputGroupInline>
                    <label htmlFor="date">날짜</label>
                    <input
                        type="date"
                        id="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        required
                    />
                </InputGroupInline>
                <InputGroupInline>
                    <label htmlFor="item">항목</label>
                    <input
                        type="text"
                        id="item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="지출 항목"
                        required
                    />
                </InputGroupInline>
                <InputGroupInline>
                    <label htmlFor="amount">금액</label>
                    <input
                        type="number"
                        id="amount"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)}
                        placeholder="지출 금액"
                        required
                    />
                </InputGroupInline>
                <InputGroupInline>
                    <label htmlFor="description">내용</label>
                    <input
                        type="text"
                        id="description"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="지출 내용"
                    />
                </InputGroupInline>
                <AddButton type="submit">저장</AddButton>
            </InputRow>
        </Section>
    );
}

const InputRow = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-end;
`;

const InputGroupInline = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 120px;
    label {
        margin-bottom: 5px;
        font-size: 14px;
        color: #333;
        text-align: left;
    }
    input {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }
`;

const AddButton = styled.button`
    padding: 8px 20px;
    height: 34px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #0056b3;
    }
`;
