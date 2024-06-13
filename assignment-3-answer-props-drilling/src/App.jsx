import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import My from './pages/My';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [expenses, setExpenses] = useState({});
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchExpenses = async () => {
            const { data } = await axios.get('http://localhost:5000/expenses');
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/my/:token" element={<My user={user} setUser={setUser} />} />
                    <Route
                        path="/"
                        element={<Home expenses={expenses} setExpenses={setExpenses} user={user} setUser={setUser} />}
                    />
                    <Route path="/detail/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
