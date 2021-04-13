import './contact.scss';

export default function Contact() {
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
          <form>
            <input type="email" placeholder="Email"/>
            <input className="button" type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </section>
  );
}
