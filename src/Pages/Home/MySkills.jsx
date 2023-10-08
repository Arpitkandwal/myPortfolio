import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
          <div  className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/product-chain-1.png" alt="Product Chain" />
              <img src="/React-icon.svg.png" alt="" />
              <img src="/download.png" alt="" />
              <img src="/919827.png" alt="" />
              <img src="/732190.png" alt="" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Front-End</h3>
              <p className="skills--section--description">
              Proficient in crafting dynamic web applications with expertise in HTML, CSS, and React, and polished with the finesse of Tailwind CSS. Adept at designing user-friendly interfaces and implementing responsive layouts for seamless user experiences. Committed to staying up-to-date with the latest web development trends and technologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
      </div>
      <div className="skills--section--container">
          <div  className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/tag-1.png" alt="Product Chain" />
              <img src="/expressjs_logo_icon_169185.png" alt="" />
              <img src="/919825.png" alt="" />
              <img src="/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Back-End</h3>
              <p className="skills--section--description">
              Seasoned in building robust web applications with Node.js, Express.js, and MongoDB, ensuring seamless data handling and server-side functionality. Proficient in optimizing database queries and designing efficient backend architecture to enhance application performance. Skilled in implementing authentication and authorization mechanisms for secure data access. Experienced in deploying applications on cloud platforms and utilizing continuous integration tools for seamless development workflows.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
