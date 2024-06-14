import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import My from './pages/My';
import React, { useState, useEffect } from 'react';
import './App.css';
import { getUser } from './lib/api/auth';
import { read } from './lib/api/expenses';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchExpenses = async () => {
            const data = await read();
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUser();
            setUser(userData);
        };
        fetchUser();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/my/:token" element={<My user={user} />} />
                <Route path="/" element={<Home expenses={expenses} user={user} />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
