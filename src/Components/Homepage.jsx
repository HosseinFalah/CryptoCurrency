import { Typography, Row, Col, Statistic } from "antd";

const Homepage = () => {
    return (
        <>
            <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurremcies" value="5"/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
                <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
            </Row>
        </>
    )
}

export default Homepage