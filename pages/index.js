import Layout from "@components/components/Layout";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <article className='glass_container'>
      <section className={styles.hero_section}>
        <h1>Hello, World!</h1>
        <p>I am a Junior Software Engineer seeking to specialise as a Full Stack Developer. My fascination with software development began with my first algorithm, which prompted me to shift my career trajectory. This decision has resulted in a deep enthusiasm for the industry.</p>
        <button><a href="/about">About</a></button>
      </section>
      <section className={styles.hero_image}>
        {/* <h6>Photo by <a href="https://unsplash.com/@ryland_dean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryland Dean</a> on <a href="https://unsplash.com/photos/6k6N8HTrXyE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h6> */}
      </section>
    </article>
  );
};


  

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;