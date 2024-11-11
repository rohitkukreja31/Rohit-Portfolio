import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="https://www.linkedin.com/in/nikhil-kore-ba4515325/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="LinkedIn profile" />
      </a>

      <a
        href="https://www.github.com/Hack1301/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="LinkedIn profile" />
      </a>
    
    </section>
  );
};

export default NavigationSocials;
