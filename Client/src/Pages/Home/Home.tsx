import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to={`/login`}>Your Name</Link>
        </div>
    );
};

export default Home;