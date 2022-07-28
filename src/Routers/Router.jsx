import { Routes, Route } from "react-router-dom";
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "../Components/index"
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
            <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
            <Route path="/news" element={<News/>}/>
        </Routes>    
    )
}

export default Router