import ProjectsPreview from "./ProjectsPreview";

const PortfolioPreview = () => {
  return (
    <article className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
        Proven ability to lead teams and manage projects efficiently, with a focus on delivering innovative solutions with tight deadlines. Seeking an entry-level position to contribute to a dynamic organization. 
         
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
