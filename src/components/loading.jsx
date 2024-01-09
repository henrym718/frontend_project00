import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % 3);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="loading">
            <div className={`dot dot-1 ${count === 0 && 'active'}`}></div>
            <div className={`dot dot-2 ${count === 1 && 'active'}`}></div>
            <div className={`dot dot-3 ${count === 2 && 'active'}`}></div>
        </div>
    );
};
export default Loading;
