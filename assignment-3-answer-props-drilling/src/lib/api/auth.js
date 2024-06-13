import axios from 'axios';

//회원가입
export const register = async ({ id, password, nickname }) => {
    try {
        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', {
            id: id,
            password: password,
            nickname: nickname,
        });
        alert('회원가입이 성공적으로 완료되었습니다!');
        return response;
    } catch (error) {
        alert('회원가입에 실패했습니다. 이미 존재하는 유저입니다. 다시 시도해주세요.');
        console.error('회원가입 에러:', error);
    }
};

//로그인
export const call = async ({ id, password }) => {
    try {
        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
            id: id,
            password: password,
        });
        //로컬스토리지에 accessToken 저장
        localStorage.setItem('accessToken', response.data.accessToken);
        console.log(localStorage.getItem('accessToken'));
        alert('로그인이 성공적으로 완료되었습니다!');
        return response;
    } catch (error) {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
        console.error('로그인 에러:', error);
    }
};

//회원 조회
export const getUser = async () => {
    const token = localStorage.getItem('accessToken');

    const { data } = await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

//회원 조회
export const newUser = async ({ newNickname }) => {
    try {
        const token = localStorage.getItem('accessToken');

        const { data } = await axios.patch(
            'https://moneyfulpublicpolicy.co.kr/profile',
            {
                nickname: newNickname,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        alert('닉네임이 성공적으로 변경되었습니다!');
        return data;
    } catch (error) {
        alert('닉네임이 변경에 실패했습니다. 다시 시도해주세요.');
        console.error('닉네임이 변경 에러:', error);
    }
};
