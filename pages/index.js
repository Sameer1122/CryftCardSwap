import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
// "../public/assets/SVG/Menu Right.svg";
import logo from "/public/assets/Cryft_Social_Logo.png";
function Home() {
  return (
    <div>
      <Head>
        <title>Cryft Social</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={logo} />
      </Head>
      <div>Cryft Card</div>
    </div>
  );
}
export default Home;
