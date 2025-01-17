import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import CandleChart from '../components/Chart'
import PriceBar from '../components/PriceBar'
import TradeNav from '../components/TradeNav'
import TradingViewWidget, { Themes } from "react-tradingview-widget";


const Home = () => {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
    });

     useEffect(() => {
       function handleResize() {
         setDimensions({
           width: window.innerWidth,
         });
       }
       window.addEventListener("resize", handleResize);
       return (_) => {
         window.removeEventListener("resize", handleResize);
       };
     });

     console.log(dimensions.width);
  return (
    <React.Fragment>
      <main style={{ backgroundColor: "black" }}>
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
          <PriceBar />
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-10">
              <div className="col-span-7 my-2">
                {/*<CandleChart width={dimensions.width} height={dimensions.height}/>*/}
                <div style={{ float: "left", width: "100%", height: "50vh" }}>
                  <TradingViewWidget
                    symbol="BINANCE:BTCUSDT"
                    interval="15"
                    timezone="Etc/UTC"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                  />
                </div>
              </div>
              <div className="col-span-3"></div>
            </div>
          </div>
          <TradeNav />
          {/* /End replace */}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home
