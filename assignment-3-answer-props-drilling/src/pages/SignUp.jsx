import { Link } from 'react-router-dom';
import React from 'react';
import { Wrapper, HeaderText, Data, Input, Btn } from './style/LoginSignup.styled';
import useInput from '../hooks/useInput';

const SignUp = () => {
    const [id, setId] = useInput('');
    const [password, setPassword] = useInput('');
    const [nickName, setNickName] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ id, password, nickName });
    };

    return (
        <Wrapper>
            <HeaderText>회원가입</HeaderText>
            <Data onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={id}
                    onChange={setId}
                    placeholder="아이디"
                    pattern=".{4,10}"
                    title="4 ~ 10글자이상 입력하세요"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="비밀번호"
                    pattern=".{4,15}"
                    title="4 ~ 15글자이상 입력하세요"
                    required
                />
                <Input
                    type="text"
                    value={nickName}
                    onChange={setNickName}
                    placeholder="닉네임"
                    pattern=".{1,10}"
                    title="1 ~ 10글자이상 입력하세요"
                    required
                />
                <Btn type="submit">가입하기</Btn>
            </Data>
            <div>
                계정이 있으신가요?
                <Link to="/login">
                    <span>로그인</span>
                </Link>
            </div>
        </Wrapper>
    );
};

export default SignUp;
