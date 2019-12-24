import React from "react";
import Head from "next/head";
import globalStyles from '../styles/global'
import MainCanvas from "../components/MainCanvas"

const Home = () => (
  <div className="wrapper">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainCanvas />

    <style jsx global>
      {globalStyles}
    </style>
  </div>
)

export default Home
