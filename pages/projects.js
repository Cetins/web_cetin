import Layout from "@components/components/Layout";
import styles from '../styles/Projects.module.css';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <article>
      <section className={styles.projects_glass_container}>
        <h1>Projects</h1>
        <p></p>
      </section>

      <section className={styles.projects_glass_container}>
        <header className={styles.card_header}>
          <h2>Sales Tracker</h2>
          <h3>Javascript - React - MongoDB</h3>
          <button className={styles.repo_button}>
            <a className="project_link" href="https://github.com/Cetins/sale-tracker-client">
              <AiFillGithub className={styles.github_link_logo}/>Project Repository
            </a>
          </button>
        </header>
        <main>
          <img className={styles.card_image} src="images/sales.png" alt="Sales Tracker"/>
          <p className={styles.card_p}>Most small businesses are still recording their transactions manually, on paper but this approach is causing a lot of unwanted workload when it comes to bringing financial outputs such as tax returns, performance ratings per employee. Sales Tracker aids small companies to track their sales, products and employees with user friendly design and minimum input requirement from users. I've used React, Javascript, Node.js to structure the client side. I'm in the process of moving to a serverless backend with MongoDB Atlas App services - HTTP endpoints.</p>
        </main>
      </section>

      <section className={styles.projects_glass_container}>
        <header className={styles.card_header}>
          <h2>CodeBNB</h2>
          <h3>Javascript - React - SQL - Java</h3>
          <div className={styles.multi_button}>
            <button className={styles.repo_button}>
              <a className="project_link" href="https://github.com/Cetins/bnb-front-end">
                <AiFillGithub className={styles.github_link_logo}/>Project Client Repository
              </a>
            </button>
            <button className={styles.repo_button}>
              <a className="project_link" href="https://github.com/Cetins/bnb-back-end">
                <AiFillGithub className={styles.github_link_logo}/>Project Server Repository
              </a>
            </button>
          </div>
        </header>
        <main>
          <img className={styles.card_image} src="images/codebnb.png" alt="CodeBNB"/>
          <p className={styles.card_p}>My main goal was to understand the development process of a full stack application when multiple technologies combined. I preferred to clone AirBnb as I was familiar with the end product and I would like to benefit from my own user experience.</p><br/>
          <p className={styles.card_p}>When I started this project I wasn't quite confident with MongoDB. After getting more information about both databases I believe this project would perform better with a NoSQL database. If I ever had a chance to start over again I would prefer MongoDB instead SQL.</p>
        </main>
      </section>

      <section className={styles.projects_glass_container}>
        <header className={styles.card_header}>
          <h2>Demon Clan</h2>
          <h3>Java - Spring - JUnit</h3>
          <button className={styles.repo_button}>
            <a className="project_link" href="https://github.com/Cetins/DemonClan">
              <AiFillGithub className={styles.github_link_logo}/>Project Repository
            </a>
          </button>
        </header>
        <main>
          <img className={styles.card_image} src="images/demonclan.png" alt="Demon Clan"/>
          <p className={styles.card_p}>The Demon Clan Project was a Java-based project that taught me a great deal about object-oriented programming (OOP), including classes and interfaces. Through this project, I was able to gain valuable experience in unit testing with JUnit. The best part was that our entire cohort enjoyed this project so much that we even volunteered to work on it as part of our weekend homework. It was a fun and engaging project that not only taught us valuable skills, but also helped us bond as a team. I am proud of the work we did and grateful for the opportunity to learn and grow through this project.</p>
        </main>
      </section>

      <section className={styles.projects_glass_container}>
        <header className={styles.card_header}>
          <h2>Gymmy</h2>
          <h3>Python - Flask - SQL</h3>
          <button className={styles.repo_button}>
            <a className="project_link" href="https://github.com/Cetins/gymmy">
              <AiFillGithub className={styles.github_link_logo}/>Project Repository
            </a>
          </button>
        </header>
        <main>
          <img className={styles.card_image} src="images/gymmy.png" alt="Demon Clan"/>
          <p className={styles.card_p}>As part of my software development education, I developed a CRM application for fitness industry using Python and Flask. This web application allowed me to perform CRUD operations with SQL, which enabled me to manage customer data more efficiently. Throughout the development process, I gained valuable experience in full stack web application development and learned about the software development life cycle.</p><br/>
          <p className={styles.card_p}>Reflecting on my experience, if I had the chance to do this project over, I would have preferred to separate the client and server-side code, as this would have made the application more modular and easier to maintain. I also believe that using Django instead of Flask would have been a better choice for a CRM tool, as Django has more built-in features and is more suitable for large-scale applications. Despite this, I am proud of the work I have done and the skills I have developed through this project.</p>
        </main>
      </section>
    </article>
  );
};

Projects.getLayout = (page) => <Layout>{page}</Layout>;

export default Projects;