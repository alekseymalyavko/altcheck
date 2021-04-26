import React from 'react';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donats: [
        {
          cur: 'BTC',
          code: '1M6ynfX5tMxKhoMQch7a7g23yonJkYKH5i'
        },
        {
          cur: 'ETH',
          code: '1M6ynfX5tMxKhoMQch7a7g23yonJkYKH5i'
        },
        {
          cur: 'ADA',
          code: '1M6ynfX5tMxKhoMQch7a7g23yonJkYKH5i'
        },
        {
          cur: 'LTC',
          code: '1M6ynfX5tMxKhoMQch7a7g23yonJkYKH5i'
        }
      ],
      isOpen: false
    };
    this.form = React.createRef();
    this.btn = React.createRef();
  }

  copyItem(item) {
    navigator.clipboard.writeText(item);
  }

  handleOutSideClick(e) {
    if (e.relatedTarget === this.btn.current) {
      return
    } else {
      this.setState({
        isOpen: false
      })
    }
  }

  handleClick(e) {   
    setTimeout(() => this.state.isOpen && this.form.current.focus(), 300)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="donate-container">
            <button className="button secondary" ref={ this.btn } onClick={ e => this.handleClick(e) }>Donate</button>
            
            <div className={`donate-form ${this.state.isOpen ? 'active' : ''}`} ref={ this.form } tabIndex="0" onBlur={ e => this.handleOutSideClick(e) }>
              <h4>Your support means a lot!</h4>
              <div className="donate-items">
                {
                  this.state.donats.map((item,i) => 
                    <div className="donate-item" key={i}>
                      <h5>
                        { item.cur }
                      </h5>
                      <div>
                        <div className="donate-item-field">
                          <span className="small">{ item.code }</span>
                          <div className="button small" onClick={ e => this.copyItem(item.code) }>Copy</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>    
        </div>
      </header>
    );
  }
}

export default Header;
