import { Link } from "react-router-dom";

import { Typography, Row, Col, Statistic } from "antd";

import { Cryptocurrencies, News } from "../Components";
import { useGetCryptosQuery } from "../Services/CryptoApi";

import millify from "millify";

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return "Loading...";

    return (
        <>
            <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurremcies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/news">Show More</Link></Typography.Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage