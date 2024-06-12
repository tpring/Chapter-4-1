import axios from 'axios';

export const register = async ({ id, password, nickname }) => {
    try {
        const response = await axios.post('', {
            id: id,
            password: password,
            nickname: nickname,
        });
        alert('내용이 성공적으로 완료되었습니다!');
        return response;
    } catch (error) {
        alert('내용 기입에 실패했습니다.. 다시 시도해주세요.');
        console.error('내용기입 에러:', error);
    }
};
