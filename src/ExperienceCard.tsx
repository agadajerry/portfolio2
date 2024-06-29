import cbc from "./assets/images/cbc_logo.png";
import pupilate from "./assets/images/pupilate.jpeg";
import khumbaa from "./assets/images/khumbaa.svg";
import st_mary from "./assets/images/st_mary.jpeg";
import gtbsvg from "./assets/images/gtblogo.svg";

const cardDetails = [
  {
    icon: cbc,
    title: "Full stack developer",
    description: `I was part of a team that designed and developed the FirstToken middleware and deployed it on the IIS FirstBank 
    platform. I also contributed to developing the FirstToken mobile application.`,

    company: "CBCEmea Gedu Tech",
    address:"Lekki, Lagos Nigeria",
    date: "March. 2022 - Present",
  },
  {
    icon: gtbsvg,
   title: "Full stack developer",
   description: `I am part of the team that developed a chatbot 
   for GTB using WhatsApp cloud api, CRM, and NLP. This web service helps customers solve their 
   problems, and you can find the chatbot widget at the bottom right of the website.",
   company: "GTB`,
   address:"Lekki, Lagos Nigeria",
   date: "Feb 2021 - Jan 2022",
 },
  {
    icon: pupilate,
    title: "Full stack developer",
    description: "I worked in a team that developed learning management software as a service SaaS.",
    company: "Pupilate",
    address:"Vintage City Estate, 40 Ahmadu Bello Way, Garki 900103, Abuja Nigeria",
    date: "March 2021 - Feb. 2022",
  },
  {
    icon: khumbaa,
    title: "Full stack developer",
    description: "E-commerce web application for arts and craft products. I worked in a team that developed the application. I implemented APIs, created react reusable components as well consuming the APIs.",
    company: "Khumbaa",
    address:"Lagos Nigeria",
    date: "July 2020 - Nov. 2021",
  },
  {
    icon: st_mary,
    title: "Software developer",
    description: "I designed and implemented pharmaceutical and inventory management software for a hospital. I also worked as an ICT adminsitrator for the hospital.",
    company: "St. Mary Hospital,",
    address:"Benue State",
    date: "April 2019 - Nov. 2020",
  },

];
function Card() {
  return (
    <>
    {cardDetails.map((card:any, index:number)=>(
      <div className="col-md-4" key={index}>
      <div className="card mb-3">
        <div className="row experience-card">
          <div className="col-md-12">
            <img src={card.icon} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
                {card.description}
              </p>
           
                <strong className="card-text">
                 {card.company} 
                </strong>
           
              <small className="text-muted"> {card.address}</small>
              <p className="card-text">
                <small className="text-muted">{card.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

    ))}
    </>
  );
}

export default Card;
