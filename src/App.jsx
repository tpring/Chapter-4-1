import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
    return (
        <Router>
            <ExpenseProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </ExpenseProvider>
        </Router>
    );
}

export default App;
