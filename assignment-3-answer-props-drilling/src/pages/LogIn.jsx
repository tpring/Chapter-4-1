import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Wrapper, HeaderText, Data, Input, Btn } from './style/LoginSignupMy.styled';
import { call } from '../lib/api/auth';

const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await call({ id, password });
        console.log('회원가입 응답 :', response);
        setId('');
        setPassword('');
        navigate('/');
    };

    return (
        <Wrapper>
            <HeaderText>로그인</HeaderText>
            <Data onSubmit={handleLogin}>
                <Input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디"
                    pattern=".{4,10}"
                    title="아이디는 4 ~ 10글자 입력하세요"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
