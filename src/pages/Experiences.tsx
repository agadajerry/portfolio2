import ExperienceCard from "../ExperienceCard";
import Layout from "../Layout";

function Experiences() {
  return (
    <Layout>
      <div className="experiences-container">
        <h3 className="experiences-title">Experience</h3>
        <div className="row">
           <ExperienceCard/>
        </div>
      </div>
    </Layout>
  );
}

export default Experiences;
