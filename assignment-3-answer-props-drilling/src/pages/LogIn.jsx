import { Link } from 'react-router-dom';
import React from 'react';
import { Wrapper, HeaderText, Data, Input, Btn } from './style/LoginSignup.styled';
import useInput from '../hooks/useInput';

const LogIn = () => {
    const [idNick, setIdNick] = useInput('');
    const [password, setPassword] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ idNick, password });
    };

    return (
        <Wrapper>
            <HeaderText>로그인</HeaderText>
            <Data onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={idNick}
                    onChange={setIdNick}
                    placeholder="아이디"
                    pattern=".{4,10}"
                    title="아이디는 4 ~ 10글자 입력하세요"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="비밀번호"
                    pattern=".{4,15}"
                    title="비밀번호는 4 ~ 15글자 입력하세요"
                    required
                />
                <Btn type="submit">로그인</Btn>
            </Data>
            <div>
                계정이 없으신가요?
                <Link to="/signup">
                    <span>회원가입</span>
                </Link>
            </div>
        </Wrapper>
    );
};

export default LogIn;
