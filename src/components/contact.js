import React from 'react';
import './contact.scss';
import { HTTP } from '../utils/request';
import Loading from'./loading';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      isSent: false
    }
  }

  handleInput(e) {
    this.setState({
      email: e.target.value
    });
  }
  async sendEmail() {
    this.setState({
      loading: true
    });
    const email = this.state.email;
    const result = await HTTP.post('/send_email', {
      receiver: email
    });
    result && this.setState({
      isSent: true,
      loading: false
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.sendEmail();
  }

  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-content-title">
              Valuable data straight to your inbox
            </h2>
            <p className="large">
              You will receive an email with a direct download link.
            </p>           
          </div>
          <div className="contact-form">
            <form name="contact-form" onSubmit={ e => this.submitForm(e)}>
              <input 
                name="mail"
                type="email" 
                placeholder="Email"
                value={ this.state.email }
                onChange={ e => this.handleInput(e)}
                disabled={ this.state.isSent }
                required
              />
              <span className="submit_wrapper">
                { this.state.loading &&
                  <Loading/>
                }
                <input 
                  className="button" 
                  type="submit" 
                  disabled={ this.state.isSent }
                  value={this.state.loading ? '' : (this.state.isSent ? 'Sent' : 'Send')}
                />
              </span>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
