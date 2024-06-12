import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../lib/api/auth';

const Header = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/login');
        }

        const fetchUser = async () => {
            const data = await getUser();
            setUser(data);
        };
        fetchUser();
    }, [navigate]);

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };

    const handleHome = () => {
        navigate('/');
    };

    return (
        <HeaderWrapper>
            <div>
                <Btn onClick={handleHome}>홈</Btn>
            </div>
            <div>
                <label>{user.nickname}</label>
                <Btn onClick={handleLogOut}>로그아웃</Btn>
            </div>
        </HeaderWrapper>
    );
};

export default Header;

export const HeaderWrapper = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Btn = styled.button`
    background-color: #2ec4b6;
    width: 120px;
    height: 40px;
    border-radius: 30px;
    color: white;
    border: solid 1px transparent;
    font-size: 18px;
    margin: 20px;

    &:hover {
        background: #9be9e1;
        color: #252525;
        border: solid 1px transparent;
    }
`;
