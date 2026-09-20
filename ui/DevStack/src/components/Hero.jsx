export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="hero-buttons">
          <a href="#technologies">Explore Technologies</a>
          <a href="#technologies">Learn More</a>
        </div>
      </div>

     <div className="hero-visual">
  <img src="/banner-stack.png" alt="Dev Stack" />
</div>
    </section>
  );
}