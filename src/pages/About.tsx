import Layout from "../Layout";
import image1 from "../assets/images/my_picture.jpeg";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import {skills,interest} from "../mockdata"


function About() {
  return (
    <Layout>
      <section className="container pt-4 about-container">
        <div className="content">
          <img src={image1} />
          <h4 className="my-name">
            <span>Idoko</span> Agada Jerry
          </h4>
          <h3 className="my-address">Lagos,Nigeria</h3>
          <h3 className="hobby">Software developer</h3>
          <div className="icon-container mt-3">
            <a href="mailto:idoko.jerry@hotmail.com">
              <AiOutlineMail />
            </a>
            <a href="https://www.github.com/agadajerry" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/idoko-agada-jerry-8b6886166/details/experience/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://docs.google.com/document/d/1ew-csq6VtxIHxaaXFuCHHtBlxZsjtxp-/edit?usp=sharing&ouid=114014785448919136144&rtpof=true&sd=true" target="_blank">
              <BsLink45Deg />
            </a>
          </div>
        </div>
      </section>
      <div className="container mt-5 about-me-container">
        <h3 className="title">About me</h3>
        <p>Hey, I'm Jerry! Nice meeting me here on the internet.</p>

        <p>
        I am a talented full-stack  software developer and agile leader with 5
         years of experience building and developing cutting-edge solutions to actual problems. 
         I have experience working on Java, Android app development, React.js and Next.js with TypeScript on the
          front-end and Node.JS restful API projects with Express, NestJs, Springboot(Java)
           and GraphQL on the back-end. I am eager to join a team of tech experts to build 
           innovative and cutting-edge software business solutions for the impressive suite 
           of clients within its global reach.

        </p>
        <i className="conclusion">Thanks for stopping by!</i>
      </div>
      <section className="container mt-5 skills-container text-center">
        <div className="row gx-4">
          <div className="col-md-6 skill-content">
            <h3 className="title">Skills</h3>
            <p>Related to software development</p>
            <div className="skill-items">
              {skills?.map((val: any,index:number) => (
                  <span className={`icon ${val.color}`} key={index}>
                    {val.icon} {val.name}
                  </span>
             
              ))}
            </div>
          </div>
          <div className="col-md-6 skill-content">
          <h3 className="title">Interest</h3>
          <p> A few other things I occupy myself with...</p>
            <div className="skill-items">
              {interest?.map((val: any,index:number) => (
                  <span className={`icon ${val.color}`}  key={index}>
                    {val.icon} {val.name}
                  </span>
              ))}
            </div>
          </div>
      
        </div>
      </section>
    </Layout>
  );
}

export default About;
