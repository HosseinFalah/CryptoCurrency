import { Link } from "react-router-dom";

import { Layout, Typography, Space } from 'antd';

import { Navbar } from "./Components/index";
import Router from "./Routers/Router";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <header className="navbar">
                <Navbar/>
            </header>
            <main className="main">
                <Layout>
                    <div className="routes">
                        <Router/>
                    </div>
                </Layout>
                <footer className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> <br />
                            All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </footer>
            </main>
        </div>
    )
}

export default App