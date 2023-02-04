import React from "react";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Primer Cumpleaños - Noah Reymundo</title>
        <meta
          name="description"
          content="Acompáñanos a celebrar el Primer Cumpleaños de Noah Reymundo (29/01/2022)"
        />
        <meta
          property="og:description"
          content="Acompáñanos a celebrar el Primer Cumpleaños de Noah Reymundo (29/01/2022)"
        />
        <meta property="og:image" content="/social.png" />
        <meta property="og:title" content="Primer Cumpleaños - Noah Reymundo" />
      </Head>

      <div className="flex items-center justify-center w-screen min-h-screen bg-ui-1-year-bg">
        <div className="shadow-lg -rotate-2 rounded-sm w-[70vw] h-[90vh] lg:h-[60vh] border-8 border-white flex flex-col-reverse lg:flex-row">
          <div className="flex-1 h-full bg-[#F9F8FC] relative overflow-hidden">
            <div className="absolute bottom-0 -left-40 w-[500px] h-[500px]">
              <Image
                alt="baby dino 1"
                layout="fill"
                src="/assets/1-year-old/dino.png"
              />
            </div>
          </div>

          <div className="flex-1 h-full bg-green-500">
            <div className="relative w-full h-full">
              <Image
                alt="Noah"
                layout="fill"
                src="/assets/1-year-old/noah.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
