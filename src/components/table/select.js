import React from 'react';
import './select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props,
      isActive: false
    }
  }

  handleState() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleClick() {
    this.setState({
      isActive: false
    })
  }
  // const items = props.items || [
  //   {'follower_count_7d_pct_change': "123"},
  //   {'follower_count_24h_pct_change': "321"}
  // ];
  // const activeItem = items.filter(props.items.active);
  
  render() {
    return (
      <div className={`select ${this.state.isActive && 'open'}`}>
        <div className="select-item" onClick={e => this.handleState(e) }>
          <span>24h %</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M10 7.33334L5 0.666672L0 7.33334" fill="#0788FF"/>
          </svg>
        </div>
        <div className="select-list">
          {/* {
            this.items.map((item, i) => 
              <p className="select-item" key={i}>{item}</p>
            )
          } */}
          <p className="select-item" onClick={e => this.handleClick(e) }>32h %</p>
          <p className="select-item">72h %</p>
  
        </div>
      </div>
    );
  }
}
export default Select