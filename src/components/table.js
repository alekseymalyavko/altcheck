import React from 'react';
import './table.scss';
import { HTTP } from '../utils/request';

function Info(props) {
  const text = props.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit, id neque tortor odio lacus.';
  return (
    <div className="info-wrapper">
      <span>i</span>
      <div className="info-text">
        <p className="small">{ text }</p>
      </div>
    </div>
  );
}
function DataField(props) {
  const data = props.num;
  const className = +data > 0 ? 'up' : 'down';
  return (
    <div className="table-col" className={`table-col ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
        <path d="M8.85319 2.66669C9.22138 2.66669 9.51986 2.96516 9.51986 3.33335V12.6667C9.51986 13.0349 9.22138 13.3334 8.85319 13.3334C8.485 13.3334 8.18652 13.0349 8.18652 12.6667V3.33335C8.18652 2.96516 8.485 2.66669 8.85319 2.66669Z" fill="#12CF80"/>
        <path d="M8.38244 2.86195C8.64279 2.6016 9.0649 2.6016 9.32525 2.86195L13.9919 7.52862C14.2523 7.78897 14.2523 8.21108 13.9919 8.47143C13.7316 8.73177 13.3095 8.73177 13.0491 8.47143L8.85384 4.27616L4.65858 8.47143C4.39823 8.73177 3.97612 8.73177 3.71577 8.47143C3.45542 8.21108 3.45542 7.78897 3.71577 7.52862L8.38244 2.86195Z" fill="#12CF80"/>
      </svg>
      <span>{data || 'NA'}</span>
    </div>
  );
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async getData() {
    const example = [
        {
        'follower_count': 375045,
        'follower_count_7d_pct_change': "",
        'follower_count_24h_pct_change': "",
        'market_cap': 46578255480.24,
        'market_cap_7d_pct_change': "",
        'market_cap_24h_pct_change': "-3.20",
        'name': "Cardano",
        'slug': "cardano",
        'symbol': "ADA",
        'watch_count': 568189,
        'watch_count_7d_pct_change': "",
        'watch_count_24h_pct_change': "1.36",
        'youtube_mention_count_24h': 3,
      },
      {
        'follower_count': 375045,
        'follower_count_7d_pct_change': "",
        'follower_count_24h_pct_change': "",
        'market_cap': 46578255480.24,
        'market_cap_7d_pct_change': "",
        'market_cap_24h_pct_change': "3.20",
        'name': "Cardano",
        'slug': "cardano",
        'symbol': "ADA",
        'watch_count': 568189,
        'watch_count_7d_pct_change': "",
        'watch_count_24h_pct_change': "-1.36",
        'youtube_mention_count_24h': 3,
      }
    ]
    const response = await HTTP.get('/report');
    this.setState({
      data: example
    })
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="table">

            <div className="table-header table-row">
              <div className="table-col name">
                <span>Name</span>
              </div>
              <div className="table-col name">
                <span>Market cap</span><Info/>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
              <div className="table-col name">
                <span>Coinmarketcap watch count</span><Info/>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
              <div className="table-col">
                <span>Twitter followers</span><Info/>
              </div>
              <div className="table-col">
                <span>24H</span>
              </div>
            </div>

            <div className="table-body">
              { 
                this.state.data && this.state.data.map((item, i) => 
                  <div className="table-row" key={i}>
                    <div className="table-col name">
                      <img src="https://picsum.photos/200/300?random=1" alt=""/><span className="symbol">{item.symbol}</span><span>{item.name}</span>
                    </div>
                    <div className="table-col name">
                      <span>{item.market_cap || 'NA'}</span>
                    </div>
                    <DataField num={item.watch_count_24h_pct_change}/>
                    <div className="table-col name">
                      <span>{item.watch_count || 'NA'}</span>
                    </div>
                    <DataField num={item.watch_count_24h_pct_change}/>
                    <div className="table-col">
                      <span>{item.follower_count || 'NA'}</span>
                    </div>
                    <DataField num={item.follower_count_24h_pct_change}/>
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
