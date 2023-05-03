import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://bangla-foods-server-nrsabit.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])
    
    return (
        <div>
            <h2>The total chefs are: {chefs.length}</h2>
        </div>
    );
};

export default Home;