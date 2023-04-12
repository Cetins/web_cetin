import Layout from "@components/components/Layout";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <article>
      <h1>Hello, World!</h1>
      <p>I am a Junior Software Developer seeking to specialise as a Full Stack Developer. My fascination with software development began with my first algorithm, which prompted me to shift my career trajectory. This decision has resulted in a deep enthusiasm for the industry.</p>
      <button><a href="/about">About</a></button>
    </article>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;