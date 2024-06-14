import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const read = async () => {
    const { data } = await axios.get('https://artistic-disco-cork.glitch.me/expenses');
    return data;
};

export const readExpense = async (id) => {
    try {
        const { data } = await axios.get(`https://artistic-disco-cork.glitch.me/expenses/${id}`);
        return data;
    } catch (error) {
        alert('특정 내용 연결에 실패했습니다.. 다시 시도해주세요.');
        console.error('내용 연결 에러:', error);
    }
};

export const create = async ({ newDate, newItem, newAmount, newDescription, userId }) => {
    try {
        const { data } = await axios.post('https://artistic-disco-cork.glitch.me/expenses', {
            id: uuidv4(),
            month: parseInt(newDate.split('-')[1], 10),
            date: newDate,
            item: newItem,
            amount: newAmount,
            description: newDescription,
            createdBy: userId,
        });
        alert('내용이 성공적으로 완료되었습니다!');
        return data;
    } catch (error) {
        alert('내용 기입에 실패했습니다.. 다시 시도해주세요.');
        console.error('내용기입 에러:', error);
    }
};

export const updateExpense = async (id, { date, item, amount, description }) => {
    try {
        const { data } = await axios.patch(`https://artistic-disco-cork.glitch.me/expenses/${id}`, {
            date: date,
            item: item,
            amount: amount,
            description: description,
        });
        alert('내용이 성공적으로 수정되었습니다!');
        return data;
    } catch (error) {
        alert('내용 수정에 실패했습니다.. 다시 시도해주세요.');
        console.error('내용 수정 에러:', error);
    }
};

export const deleteExpense = async (id) => {
    try {
        await axios.delete(`https://artistic-disco-cork.glitch.me/expenses/${id}`);
        alert('내용이 성공적으로 삭제되었습니다!');
    } catch (error) {
        alert('내용 삭제에 실패했습니다.. 다시 시도해주세요.');
        console.error('내용 삭제 에러:', error);
    }
};
