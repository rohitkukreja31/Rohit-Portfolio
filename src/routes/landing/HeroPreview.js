import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Rohit Kukreja</em>
        <br></br>Data Analytics.
      </h1>
      <p className="gray-text p-tag">Blockchain Enthusiastic.</p>  
    </article>
  );
};

export default HeroPreview;
