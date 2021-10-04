import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ashfaq Nisar - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex bg-black mt-20 md:mt-0"}>
        <div className={"container px-4 sm:mx-auto "}>
          {/*Todo: Add a back button*/}
          <div className={"py-5 md:py-6"}>
            <h2 className={"text-2xl sm:text-2xl text-bold text-white"}>
              About Me
            </h2>
          </div>
          <div>Just a typical Computer Geek</div>
        </div>
      </main>
    </>
  );
};

export default About;
