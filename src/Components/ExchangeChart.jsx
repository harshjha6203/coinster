import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './component.css';

const Exchart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getCoinData = async () => {
            const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1');
            const data = await res.json();
            console.log(data)
            setItems(data)
        }
    
        getCoinData();
    }, [])

    const fetchCoinData = async (currentPage) => {
        const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=100&page='+currentPage);
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
            <div className="chart">
                <div className="container">
                    <div className="chart-row first">
                        <div className="exchange first">Exchange</div>
                        <div className="rating first">Rating</div>
                        <div className="Exvolume first">24H Volume</div>
                        <div className="Country first">Visits</div>
                    </div>
                {
                    items.map((item) => {
                        return (
                            <div className="chart-row">
                                <div className="exchange">
                                    <div className="cryptocurrency-rank">{item.trust_score_rank}</div>
                                    <img src={item.image} alt="" className="cryptocurrency-logo" />
                                    <div className="cryptocurrency-detail">
                                        <div className="coin-name">{item.name}</div>
                                    </div>
                                </div>
                                {
                                    item.trust_score < 0 ? (
                                        <div className="rating">0/10</div>
                                    ):(
                                        <div className="rating">{item.trust_score}/10</div>
                                    )
                                }
                                <div className="Exvolume">{item.trade_volume_24h_btc.toLocaleString()} BTC</div>
                                {
                                    !item.country ? (
                                        <div className="Country">-</div>
                                    ):(
                                        <div className="Country">{item.country}</div>
                                    )
                                }
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
                pageCount={4}
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

export default Exchart