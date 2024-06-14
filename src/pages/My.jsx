import { useState } from 'react';
import { Wrapper, HeaderText, Data, Input, BackBtn, EditBtn } from './style/LoginSignupMy.styled';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../lib/api/auth';

const My = ({ user }) => {
    const [newNickname, setNewNickname] = useState('');
    const navigator = useNavigate();

    const handleAddUser = async (e) => {
        e.preventDefault();
        const response = await newUser({ newNickname });
        setNewNickname('');
        console.log('프로필수정 응답 :', response);
        navigator('/');
    };

    return (
        <Wrapper>
            <HeaderText>프로필</HeaderText>
            <Data onSubmit={handleAddUser}>
                <Input
                    type="text"
                    value={newNickname}
                    placeholder={`${user.nickname}`}
                    onChange={(e) => setNewNickname(e.target.value)}
                    pattern=".{1,10}"
                    title="1 ~ 10글자 이상 입력하세요"
                    required
                />
                <div>
                    <EditBtn type="submit">수정하기</EditBtn>
                    <BackBtn onClick={() => navigator('/')}>돌아가기</BackBtn>
                </div>
            </Data>
        </Wrapper>
    );
};

export default My;
