import Layout from "@components/components/Layout";

const About = () => {
  return (
    <main>
      <h1>About me</h1>
      <article>
        <p>Hi there! My name is Sezen Cetin, and I'm a software engineer and web developer based in Glasgow. But my journey to get here has been anything but straightforward.</p>
        <br/>
        <p>After completing my Bachelor's degree in Modern Greek Literature, I found myself working in the wholesale gold and silver jewelry industry as an international sales representative. However, despite being good at my job, I found that the industry was male-dominated, and I wasn't getting the appreciation I deserved. So I decided to make a change.</p>
        <br/>
        <p>I moved to Glasgow, where I started my own small beauty business in a female-dominated, calm, and safe environment. While running my business, I discovered a passion for web development and began teaching myself how to code using no-code platforms like WIX. The more I learned, the more I enjoyed it, and I soon began pursuing more advanced courses in full-stack web development. </p>
      </article>
      <hr/>
      <article>
        <h2>Education</h2>
        <section>
          <h3>CodeClan – Professional Software Development  </h3>
          <h6>MAY 2022 - SEP 2022</h6>
          <p>I completed a 16-week hands-on software development programme. This entailed working on solo and group projects. These tasks weren’t just development, we had to use methodologies such as Agile/Scrum, plan our projects, look at UI/UX and other tools to become a complete developer.
          I programmed in Python/Flask, Javascript/React, Java/Spring, SQL, MongoDB</p>
        </section>
        <section>
          <h3>Harvard University — Certificate</h3>
          <h6>DEC 2020 - JAN 2021</h6>
          <p>Addition to the fundamentals of computer programming, I've learned C and Python. I've been a part of an amazing online community where we solve problem sets by guiding each other on our CS50 forum.</p>
        </section>
        <section>
          <h3>Istanbul University – BA, Modern Greek Literature</h3>
          <h6>SEP 2000 - AUG 2007</h6>
          <p>I completed my undergraduate studies in Modern Greek Literature, where I learned about an amazing literature and discovered the great history of ancient Greece.</p>
        </section>
      </article>
      <hr/>
      <article>
        <h2>Work Experience</h2>
        <p>Through my various work experiences in sales and customer service, I have developed strong communication and interpersonal skills. Collaborating with teams to determine pricing schedules, delivering compelling sales presentations to clients, and visiting clients to better understand their needs has taught me how to be detail-oriented, analytical, and adaptable. These skills are essential in a role as a junior software engineer, where effective communication, problem-solving, and attention to detail are crucial for success. I am confident that I can apply the skills I have acquired through my past experiences to excel as a junior software engineer and contribute to the growth of the team.</p><br/>
        <section>
          <h3>Nail Solutions</h3>
          <h4>Position: Entrepreneur, Business Owner</h4>
          <h4>Location: Glasgow, UK</h4>
          <h6>SEP 2014 - MAY 2022</h6>
          <p>I have learned how to develop websites using various technologies such as HTML, CSS, Wordpress, and Wix. Through my studies and practice, I have gained the skills necessary to create a website that fits your specific needs and meets your business goals.</p><br/>
          <p>Furthermore, I have learned how to generate effective online campaigns on social media platforms. With my knowledge and understanding of social media marketing, I can help increase your online presence and reach your target audience more effectively. Together, we can develop a comprehensive online strategy that will take your business to the next level.</p>
        </section>
        <section>
          <h3></h3>
          <h4>Position: International Sales Representative</h4>
          <h4>Location: Istanbul, Turkey</h4>
          <h6>MAY 2012 - OCT 2014</h6>
          <p>In this role, I had the opportunity to collaborate with my team in determining pricing schedules for quotes, promotions, and negotiations. I also delivered sales presentations to a diverse range of clients, which helped to attract and retain customers.</p><br/>
          <p>In addition, I visited clients to better understand their needs and presented products and services that aligned with their requirements. This allowed me to establish strong relationships with clients while promoting the company's offerings. Lastly, I ensured that all financial records were accurately maintained for future reference.</p><br/>
          <p>I am grateful for the experience I gained in this role and believe that it has provided me with valuable skills that can be applied to future endeavors.</p>
        </section>
        <section>
          <h3></h3>
          <h4>Position: Greece Sales Representative</h4>
          <h4>Location: Istanbul, Turkey</h4>
          <h6>Sep 2014 - May 2022</h6>
          <p>During my employment, I was responsible for a range of important tasks that contributed to the success of the company. I visited clients to understand their needs and promote products, maintained accurate client records, edited product photos, created engaging email campaigns, and conducted market research to inform strategic decision-making.</p><br/>
          <p>Through my contributions, I was able to help the company build strong relationships with clients, enhance marketing efforts, and make informed business decisions. I am confident that I can apply these skills and experiences to add value to your organization as well.</p>
        </section>
      </article>
    </main>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;