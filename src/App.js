import QrReader from 'react-qr-reader';
import React from 'react';
import './App.css';

function App() {
    let result = 'sad';
    const handleScan = (e) => {
        console.log(e);
    };
    return (
        <div>
            <QrReader
                delay={300}
                onError={(e) => console.log(e)}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{result}</p>
        </div>
    );
}

export default App;
