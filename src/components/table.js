import React from 'react';
import './table.scss';
import { HTTP } from '../utils/request';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async getData() {
    // const data = await HTTP.get('/report');
    const data1 = [
      {
          "name": "Bitcoin",
          "slug": "bitcoin",
          "symbol": "BTC",
          "market_cap": 1174465870698.18,
          "market_cap_24h_pct_change": "2.10",
          "market_cap_7d_pct_change": "",
          "watch_count": 959907,
          "watch_count_24h_pct_change": "1.06",
          "watch_count_7d_pct_change": "",
          "follower_count": "",
          "follower_count_24h_pct_change": "",
          "follower_count_7d_pct_change": "",
          "youtube_mention_count_24h": 14
      },
      {
          "name": "Ethereum",
          "slug": "ethereum",
          "symbol": "ETH",
          "market_cap": 270851675237.79,
          "market_cap_24h_pct_change": "4.20",
          "market_cap_7d_pct_change": "",
          "watch_count": 776650,
          "watch_count_24h_pct_change": "0.94",
          "watch_count_7d_pct_change": "",
          "follower_count": 883549,
          "follower_count_24h_pct_change": "",
          "follower_count_7d_pct_change": "",
          "youtube_mention_count_24h": 9
      },
      {
          "name": "Binance Coin",
          "slug": "binance-coin",
          "symbol": "BNB",
          "market_cap": 85391122599.89,
          "market_cap_24h_pct_change": "-3.05",
          "market_cap_7d_pct_change": "",
          "watch_count": 387728,
          "watch_count_24h_pct_change": "1.75",
          "watch_count_7d_pct_change": "",
          "follower_count": 2521551,
          "follower_count_24h_pct_change": "",
          "follower_count_7d_pct_change": "",
          "youtube_mention_count_24h": 3
      }
    ]
    this.setState({
      data: data1
    })
  }

  componentWillMount() {
    this.getData();
  }

  componentDidMount() {
    console.log(this.state)

  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="table">

            <div className="table-header table-row">
              <div className="table-col">
                <span>Name</span>
              </div>
              <div className="table-col">
                <span>Market cap</span>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
              <div className="table-col">
                <span>Coinmarketcap watch count</span>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
              <div className="table-col">
                <span>Twitter followers</span>
              </div>
            </div>

            <div className="table-body">
              {
                this.state.data.map((item, i) => 
                  <div className="table-row">
                    <div className="table-col">
                      <span>{item.name}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.market_cap}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.market_cap_24h_pct_change}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.watch_count}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.watch_count_24h_pct_change}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.follower_count}</span>
                    </div>
                    <div className="table-col">
                      <span>{item.follower_count_24h_pct_change}</span>
                    </div>
                  </div>
                )
              }
            </div>

          </div>
        </div>
      </section>
      
    );
  }
}

export default Table;
