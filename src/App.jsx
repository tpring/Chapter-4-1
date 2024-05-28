import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(savedExpenses);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home setExpenses={setExpenses} />} />
                <Route path="/detail/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} />
            </Routes>
        </Router>
    );
}

export default App;
