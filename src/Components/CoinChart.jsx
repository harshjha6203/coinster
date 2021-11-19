import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './component.css';

const Coin = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getCoinData = async () => {
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&orde=market_cap_desc&per_page=100&page=1&sparkline=false');
            const data = await res.json();
            console.log(data)
            setItems(data)
        }
    
        getCoinData();
    }, [])

    const fetchCoinData = async (currentPage) => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&orde=market_cap_desc&per_page=100&page='+currentPage+'&sparkline=false');
        const newdata = await res.json();
        return newdata;
    }

    const handlePageClick = async (newdata) => {
        console.log(newdata.selected)

        let currentPage = newdata.selected + 1;
        
        const coinsFormServer = await fetchCoinData(currentPage);
        setItems(coinsFormServer);
    }
    return (
        <div className="coin-chart">
            <div className="chart-title">Live Crypto Prices By Market Cap</div>
            <div className="chart-detail-box-container">
                <div className="chart-detail-box">
                    <div className="text">Total Coins</div>
                    <div className="result">10700</div>
                </div>
                <div className="chart-detail-box">
                <div className="text">Volume (24H)</div>
                    <div className="result"> $165,332,214,245</div>
                </div>
                <div className="chart-detail-box">
                <div className="text">Market Cap</div>
                    <div className="result"> $2,802,477,456,767</div>
                </div>
            </div>
            <div className="chart">
                <div className="container">
                    <div className="chart-row first">
                        <div className="cryptocurrency first">Cryptocurrency</div>
                        <div className="price first">Price</div>
                        <div className="change first">24H%</div>
                        <div className="volume first">24H Volume</div>
                        <div className="marketcap first">Market Cap</div>
                    </div>
                {
                    items.map((item) => {
                        return (
                            <div className="chart-row">
                                <div className="cryptocurrency">
                                    <div className="cryptocurrency-rank">{item.market_cap_rank}</div>
                                    <img src={item.image} alt="" className="cryptocurrency-logo" />
                                    <div className="cryptocurrency-detail">
                                        <div className="coin-name">{item.name}</div>
                                        <div className="coin-symbol">{item.symbol.toUpperCase()}</div>
                                    </div>
                                </div>
                                <div className="price">${item.current_price}</div>
                                {
                                    !item.price_change_percentage_24h ? (
                                        <div className="change">-</div>
                                    ):(
                                        item.price_change_percentage_24h < 0 ? (
                                        <div className="change red">{item.price_change_percentage_24h.toFixed(2)}%</div>
                                    ):(
                                        <div className="change green">{item.price_change_percentage_24h.toFixed(2)}%</div>
                                    )
                                    )
                                }
                                <div className="volume">${item.total_volume.toLocaleString()}</div>
                                <div className="marketcap">${item.market_cap.toLocaleString()}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <ReactPaginate
                previousLabel={'PREV'}
                nextLabel={'NEXT'}
                breakLabel={'|'}
                pageCount={107}
                marginPagesDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'previous'}
                nextClassName={'next'}
                breakClassName={'breaker'}
                activeClassName={'page-active'}
             />
        </div>
    )
}

export default Coin