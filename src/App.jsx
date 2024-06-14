import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import My from './pages/My';
import './App.css';
import { getUser } from './lib/api/auth';

function App() {
    const [user, setUser] = useState();

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
                <Route path="/" element={<Home user={user} />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
