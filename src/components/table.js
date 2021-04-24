import React from 'react';
import { HTTP } from '../utils/request';
import './table.scss';
import Info from'./table/info';
import Select from'./table/select';
import Pagination from'./table/pagination';


function DataField(props) {
  const className = +props.num > 0 ? 'up' : 'down';
  const data = +props.num ? `${Math.abs(props.num)} %` : 'NA'
  return (
    <div className={`table-col ${className}`}>
      {props.num &&
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
          <path d="M8.85319 2.66669C9.22138 2.66669 9.51986 2.96516 9.51986 3.33335V12.6667C9.51986 13.0349 9.22138 13.3334 8.85319 13.3334C8.485 13.3334 8.18652 13.0349 8.18652 12.6667V3.33335C8.18652 2.96516 8.485 2.66669 8.85319 2.66669Z" fill="#12CF80"/>
          <path d="M8.38244 2.86195C8.64279 2.6016 9.0649 2.6016 9.32525 2.86195L13.9919 7.52862C14.2523 7.78897 14.2523 8.21108 13.9919 8.47143C13.7316 8.73177 13.3095 8.73177 13.0491 8.47143L8.85384 4.27616L4.65858 8.47143C4.39823 8.73177 3.97612 8.73177 3.71577 8.47143C3.45542 8.21108 3.45542 7.78897 3.71577 7.52862L8.38244 2.86195Z" fill="#12CF80"/>
        </svg>
      }
      <span>{data}</span>
    </div>
  );
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      isFullSize: false,
      data: [],
      params: {
        count: 20,
        from: 0,
        size: 20,
        order: 'desc',
        sort_by: 'market_cap'
      },

      showData: ['24h', '7d'],
      market_cap_change: '24h',
      watch_count_change: '24h',
      follower_count_change: '24h',
    }
  }

  async getData() {
    try {
      const params = { ...this.state.params };
      delete params.count;

      const response = await HTTP.get('/report', { params });
      this.setState({
        data: response.data
      })
    } catch {
      this.setState({
        isError: true
      })
    }
  }

  handleFullSize() {
    const action = !this.state.isFullSize ? 'add' : 'remove';
    document.body.classList[action]('hidden');

    this.setState({
      isFullSize: !this.state.isFullSize
    })
  }

  handleShowData(field, data) {
    this.setState({
      [field]: data
    })
  }

  async handlePagination(e) {
    const from = e * this.state.params.size + (e === 0 ? 0 : 1);
    const newCount = from + this.state.params.size;

    await this.setState(prevState => ({
      params: {
        ...prevState.params,
        from: from,
        count: newCount,
      }
    }))

    this.getData();
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <section className="table-wrapper">
        <div className="container">
          <div className={`table ${this.state.isFullSize ? 'full-size' : ''}`}>

            <div className="table-column">
              <div className="table-row table-header">
                <div className="table-col">
                  <span>Name</span>
                </div>
              </div>
              { 
                this.state.data && this.state.data.map((item, i) => 
                  <div className="table-row header-col" key={i}>
                    <div className="table-col">
                      <img src="https://picsum.photos/200/300?random=1" alt=""/>
                      <span className="symbol">{item.symbol}</span>
                      <span>{item.name}</span>
                    </div>
                  </div>
                )
              }
              {
                this.state.isError && 
                <div className="table-row header-col">
                  <div className="table-col"></div>
                </div>
              }
            </div>

            <div className="table-body">

              <div className="table-row table-header">
                <div className="table-col col-1">
                  <span>Market cap</span><Info/>
                </div>
                <div className="table-col">
                  <Select 
                    list={this.state.showData}
                    handleSelect={ e => this.handleShowData('market_cap_change', e)}
                  />
                </div>
                <div className="table-col col-2">
                  <span>CMC watch count</span><Info/>
                </div>
                <div className="table-col">
                  <Select 
                    list={this.state.showData}
                    handleSelect={ e => this.handleShowData('watch_count_change', e)}
                  />
                </div>
                <div className="table-col col-3">
                  <span>Twitter followers</span><Info/>
                </div>
                <div className="table-col">
                  <Select 
                    list={this.state.showData}
                    handleSelect={ e => this.handleShowData('follower_count_change', e)}
                  />
                </div>
              </div>

              {
                this.state.data && this.state.data.map((item, i) => 
                  <div className="table-row" key={i}>
                    <div className="table-col col-1">
                      <span>{item.market_cap || 'NA'}</span>
                    </div>
                    <DataField num={item.market_cap_change[this.state.market_cap_change]}/>
                    <div className="table-col col-2">
                      <span>{item.watch_count || 'NA'}</span>
                    </div>
                    <DataField num={item.watch_count_change[this.state.watch_count_change]}/>
                    <div className="table-col col-3">
                      <span>{item.follower_count || 'NA'}</span>
                    </div>
                    <DataField num={item.follower_count_change[this.state.follower_count_change]}/>
                  </div>
                )
              }
            </div>
              { 
                this.state.data.length > 0 && 
                <Pagination 
                  data={ this.state.params }
                  isFullSize={ this.state.isFullSize }
                  handleFullSize={ e => this.handleFullSize(e)}
                  handlePagination={ e => this.handlePagination(e)}
                />
              }

              {
                (this.state.isError || !this.state.data.length) && 
                <div className="table-note">
                  NO DATA
                </div>
              }
          </div>
        </div>
      </section>
      
    );
  }
}

export default Table;
