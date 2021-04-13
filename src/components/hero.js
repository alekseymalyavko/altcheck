import './hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          <strong>Altcheck</strong> helps you focus on promising crypto projects.
        </h1>
        <div className="hero-content">
          <div className="hero-content-item">
            <h5>
              What is altcheck?
            </h5>
            <p className="large">
              We built a tool to help you find and focus on the most promising crypto currency projects. Explore the table or download the data for further analysis.
            </p>
          </div>
          <div className="hero-content-item">
            <h5>
              Why is it different?
            </h5>
            <p className="large">
            We focus on social data. We think this type of data is the most useful for finding projects that will outperform (i.e. better % return) in both the short-term and long-term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
