import React from 'react';
import './contact.scss';
import { HTTP } from '../utils/request';

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
  async sendEmail(email) {
    const result = await HTTP.post('/');
    result && this.setState({
      email: '',
      isSent: true
    });
    // console.log(result)
  }
  submitForm(e) {
    e.preventDefault();
    const email = this.state.email;
    this.sendEmail(email);
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
                type="email" 
                placeholder="Email"
                value={ this.state.email }
                onChange={ e => this.handleInput(e)}
                disabled={ this.state.isSent }
                required
              />
              <input 
                className="button" 
                type="submit" 
                value={this.state.isSent ? 'Sent' : 'Send'}
              />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
