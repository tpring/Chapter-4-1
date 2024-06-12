import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Wrapper, HeaderText, Data, Input, Btn } from './style/LoginSignup.styled';
import { regiter } from '../lib/api/auth';

const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleAddUser = async (e) => {
        e.preventDefault();
        // register : 회원가입  API 호출 함수   src/lib/api/auth.js
        const response = await regiter({ id, password, nickname });
        console.log('회원가입 응답 :', response);
        setId('');
        setPassword('');
        setNickname('');
    };
    z;
    return (
        <Wrapper>
            <HeaderText>회원가입</HeaderText>
            <Data onSubmit={handleAddUser}>
                <Input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디"
                    pattern=".{4,10}"
                    title="4 ~ 10글자이상 입력하세요"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    pattern=".{4,15}"
                    title="4 ~ 15글자이상 입력하세요"
                    required
                />
                <Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
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
