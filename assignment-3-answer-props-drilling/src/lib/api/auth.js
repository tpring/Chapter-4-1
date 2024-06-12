import axios from 'axios';

export const regiter = async ({ id, password, nickname }) => {
    try {
        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', {
            id: id,
            password: password,
            nickname: nickname,
        });

        alert('회원가입이 성공적으로 완료되었습니다!');
        return response;
    } catch (error) {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');

        console.error('회원가입 에러:', error);
    }
};
