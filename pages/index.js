import Layout from "@components/components/Layout";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <article className={styles.hero_container}>
      <h1 className={styles.hero_title}>Hello, World!</h1>
      <p>I am a Junior Software Engineer seeking to specialise as a Full Stack Developer. My fascination with software development began with my first algorithm, which prompted me to shift my career trajectory. This decision has resulted in a deep enthusiasm for the industry.</p>
      <button><a href="/about">About</a></button>
    </article>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;