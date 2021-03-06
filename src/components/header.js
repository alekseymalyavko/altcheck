import React from 'react';
import './header.scss';
import OutsideAlerter from './outsideclick';


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
  }

  copyItem(e) {
    const input = e.target.parentElement.children[0];
    input.focus();
    input.select();
    input.setSelectionRange(0, 999);
    document.execCommand('copy');
  }

  handleOutSideClick(e) {
    const target = e.target || e.relatedTarget;
    if (target.classList.contains('inside')) {
      return
    } else {
      this.setState({
        isOpen: false
      })
    }
  }

  handleClick(e) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="donate-container">
            <button className="button secondary inside" onClick={ e => this.handleClick(e) }>Donate</button>
            
            {this.state.isOpen && 
              <OutsideAlerter handleClickOutside={ e => this.handleOutSideClick(e) }>
                <div className={`donate-form inside ${this.state.isOpen ? 'active' : ''}`}>
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
                              <input className="small inside" readOnly type="text" defaultValue={ item.code }/>
                              <div className="button small inside" onClick={ e => this.copyItem(e) }>
                                Copy
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </OutsideAlerter>
            }   

          </div>    
        </div>
      </header>
    );
  }
}

export default Header;
