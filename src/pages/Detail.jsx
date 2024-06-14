import { useEffect, useState } from 'react';
import { Container, InputGro, ButtonGro, DeleteButton, BackButton, Button } from './style/Detail.styled';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { readExpense, updateExpense, deleteExpense } from '../lib/api/expenses';

export default function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [selectedExpense, setSelectedExpense] = useState(null);

    const [date, setDate] = useState('');
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const expense = await readExpense(id);
                setSelectedExpense(expense);
                setDate(expense.date);
                setItem(expense.item);
                setAmount(expense.amount);
                setDescription(expense.description);
            } catch (error) {
                console.error('지출 데이터 로딩 실패:', error);
            }
        };

        fetchData();
    }, [id]);

    const editExpense = async () => {
        try {
            await updateExpense(id, { date, item, amount, description });

            navigate('/');
        } catch (error) {
            console.error('지출 업데이트 실패:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteExpense(id);
            navigate('/');
        } catch (error) {
            console.error('지출 삭제 실패:', error);
        }
    };
    return (
        <Container>
            <Header />
            <InputGro>
                <label htmlFor="date">날짜</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </InputGro>
            <InputGro>
                <label htmlFor="item">항목</label>
                <input
                    type="text"
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="지출 항목"
                    required
                />
            </InputGro>
            <InputGro>
                <label htmlFor="amount">금액</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="지출 금액"
                    required
                />
            </InputGro>
            <InputGro>
                <label htmlFor="description">내용</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="지출 내용"
                />
            </InputGro>
            <ButtonGro>
                <Button onClick={editExpense}>수정</Button>
                <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
            </ButtonGro>
        </Container>
    );
}
