import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const stBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

function App() {
    return (
        <>
            <stBox></stBox>
        </>
    );
}

export default App;
