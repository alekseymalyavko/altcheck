import React from 'react';
import './select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.list[0],
      isActive: false
    }
  }

  handleState() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleClick(item) {
    this.props.handleSelect(item)
    this.setState({
      selected: item,
      isActive: false
    })
  }
  
  render() {
    return (
      <div className={`select ${this.state.isActive && 'open'}`}>
        <div className="select-item" onClick={e => this.handleState(e) }>
          <span>{this.state.selected} %</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M10 7.33334L5 0.666672L0 7.33334" fill="#0788FF"/>
          </svg>
        </div>
        <div className="select-list">
          {
            this.props.list && this.props.list.map((item, i) => 
              item !== this.state.selected && <p className="select-item" key={i} onClick={e => this.handleClick(item) }>{item} %</p>
            )
          }  
        </div>
      </div>
    );
  }
}
export default Select