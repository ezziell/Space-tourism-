import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import Home from '../pages/Home';
import Bar from './Bar';

const App = () => {
    return(
        <BrowserRouter>
        <Bar />
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default App;