import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { CoinContext } from "../../context/CoinContext";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import LineChart from "../../components/linechart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coindData, setCoinData] = useState();
  const { currency } = useContext(CoinContext);
  const [history, setHistory] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-zQULtXWTHk3dvmHCuTDEwkNH",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistory = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-zQULtXWTHk3dvmHCuTDEwkNH",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setHistory(response);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistory();
  }, [currency]);

  if (!coindData)
    return (
      <div className="loading">
        {" "}
        <ReactLoading type="spin" color="blue" height={"5%"} width={"5%"} />
      </div>
    );

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coindData?.image?.large} alt="" />
        <p>
          <b>
            {coindData?.name}({coindData?.symbol.toUpperCase()})
          </b>
        </p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={history} />
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>Rank : {coindData?.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coindData?.market_data?.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{currency.symbol} {coindData?.market_data?.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h High</li>
          <li>{currency.symbol} {coindData?.market_data?.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h Low</li>
          <li>{currency.symbol} {coindData?.market_data?.low_24h[currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
