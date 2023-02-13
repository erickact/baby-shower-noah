import React from "react";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  // random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  return (
    <>
      <Head>
        <title>Primer Cumpleaños - Noah Reymundo</title>
        <meta
          name="description"
          content="Acompáñanos a celebrar el Primer Cumpleaños de Noah Reymundo (04/MAR/2023) / Jr Pedro Conde 178 / Sala SUM / 2pm"
        />
        <meta
          property="og:description"
          content="Acompáñanos a celebrar el Primer Cumpleaños de Noah Reymundo (04/MAR/2023) / Jr Pedro Conde 178 / Sala SUM / 2pm"
        />
        <meta property="og:image" content="/social.png" />
        <meta property="og:title" content="Primer Cumpleaños - Noah Reymundo" />
      </Head>

      <div className="flex items-center justify-center w-screen min-h-screen bg-ui-1-year-bg">
        {/* Card */}
        <div className="shadow-lg -rotate-1 sm:-rotate-2 rounded-sm w-[90vw] my-4 sm:my-auto md:w-[80vw] md:h-[95vh] lg:h-[80vh] border-8 border-white flex flex-col lg:flex-row">
          {/* Box 1 */}
          <div className="flex-1 min-h-screen md:min-h-min h-full bg-[#F9F8FC] relative overflow-hidden">
            <p className="relative md:absolute sm:left-[19rem] lg:left-[14rem] sm:top-[2rem] lg:top-[5rem] -rotate-[2deg] text-6xl font-body flex space-x-0.5 font-semibold drop-shadow-[0_2px_2px_rgba(255,255,255,1)] z-40 justify-center mt-14 sm:mt-auto">
              <span className="text-ui-1-year-green">R</span>
              <span className="text-ui-1-year-skyblue">A</span>
              <span className="text-ui-1-year-blue">W</span>
              <span className="text-ui-1-year-green">R</span>
              <span className="text-ui-1-year-skyblue">!</span>
            </p>

            <div className="relative mx-auto md:absolute sm:bottom-[1rem] sm:-left-[2rem] lg:-left-[7rem] w-[70vw] sm:w-[440px] lg:w-[520px] h-[70vw] sm:h-[440px] lg:h-[520px] -mt-8 mb-6 sm:mt-auto sm:mb-auto">
              <Image
                alt="baby dino 1"
                layout="fill"
                src="/assets/1-year-old/dino.png"
              />
            </div>

            <div className="absolute top-24 sm:top-auto left-24 sm:bottom-[22rem] lg:bottom-[30rem] sm:left-[10rem] w-[120px] h-[120px] rotate-[20deg]">
              <Image
                alt="tero"
                layout="fill"
                src="/assets/1-year-old/tero.png"
              />
            </div>
            <div className="absolute top-48 -right-20 sm:top-[100px] sm:-right-16 w-[240px] h-[240px] rotate-[30deg]">
              <Image
                alt="patas"
                layout="fill"
                src="/assets/1-year-old/patas.png"
              />
            </div>

            <div className="relative text-center md:absolute sm:left-[6rem] sm:bottom-[16rem] lg:bottom-[22rem] md:-rotate-[15deg] z-50 mb-5 sm:mb-auto">
              <h1 className="font-mono text-ui-1-year-skyblue text-6xl leading-[3rem] drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">
                Noah <br />
                Reymundo
              </h1>
            </div>
            <div className="relative md:absolute sm:left-[8rem] lg:left-[5rem] sm:bottom-[12rem] lg:bottom-[14rem] -rotate-[10deg] sm:-rotate-[20deg] font-sans text-center mb-10 sm:mb-auto">
              <p className="text-4xl text-white drop-shadow-[0_2px_2px_rgba(128,182,156,1)]">
                Cumple 1 año
              </p>
            </div>
            <div className="relative md:absolute sm:bottom-[70px] sm:right-[5rem] lg:right-[2rem] text-center font-body space-y-2 font-bold mb-24 sm:mb-auto">
              <p className="text-xl leading-5 text-ui-1-year-green">
                Sábado 4 de Marzo <br /> 2:00pm
              </p>
              <p className="leading-5 text-ui-1-year-skyblue">
                Jr Pedro Conde 178, Lince <br /> Sala SUM
              </p>
            </div>
            {/* leaves */}
            <div className="absolute w-40 h-40 -top-16 left-[12%] rotate-12">
              <Image
                alt="hoja2"
                layout="fill"
                src="/assets/1-year-old/hoja2.png"
              />
            </div>
            <div className="absolute w-40 h-40 rotate-[250deg] -left-14 top-[30%]">
              <Image
                alt="hoja2"
                layout="fill"
                src="/assets/1-year-old/hoja2.png"
              />
            </div>
            <div className="absolute z-10 w-40 h-40 rotate-45 -bottom-20 -right-10">
              <Image
                alt="hoja2"
                layout="fill"
                src="/assets/1-year-old/hoja2.png"
              />
            </div>
            <div className="absolute -left-24 w-32 rotate-[140deg] h-80 top-[25%]">
              <Image
                alt="leaf1"
                layout="fill"
                src="/assets/1-year-old/leaf1.png"
              />
            </div>
            <div className="absolute -right-6 w-40 h-40 rotate-[140deg] -top-6">
              <Image
                alt="leaf4"
                layout="fill"
                src="/assets/1-year-old/leaf4.png"
              />
            </div>
            <div className="absolute -top-8 -left-10 w-40 h-40 rotate-[100deg] z-10">
              <Image
                alt="leaf4"
                layout="fill"
                src="/assets/1-year-old/leaf4.png"
              />
            </div>
            <div className="absolute z-30 w-44 h-44 -bottom-10 -left-10">
              <Image
                alt="leaf4"
                layout="fill"
                src="/assets/1-year-old/leaf4.png"
              />
            </div>
            <div className="absolute w-44 h-44 -right-20 top-1/2 rotate-[260deg]">
              <Image
                alt="leaf4"
                layout="fill"
                src="/assets/1-year-old/leaf4.png"
              />
            </div>
            <div className="absolute w-52 h-36 -top-20 left-[42%] rotate-12">
              <Image
                alt="hoja3"
                layout="fill"
                src="/assets/1-year-old/hoja3.png"
              />
            </div>
            <div className="absolute w-48 h-32 left-1/3 -bottom-10 -rotate-[140deg] z-10">
              <Image
                alt="hoja3"
                layout="fill"
                src="/assets/1-year-old/hoja3.png"
              />
            </div>
            <div className="absolute -left-10 w-32 rotate-[230deg] h-44 top-[12%]">
              <Image
                alt="leaf2"
                layout="fill"
                src="/assets/1-year-old/leaf2.png"
              />
            </div>
            <div className="absolute w-24 h-32 right-[15%] -bottom-14 -rotate-[115deg]">
              <Image
                alt="leaf2"
                layout="fill"
                src="/assets/1-year-old/leaf2.png"
              />
            </div>
            <div className="absolute w-40 h-40 left-[12%] -bottom-16 rotate-[110deg] z-20">
              <Image
                alt="leaf3"
                layout="fill"
                src="/assets/1-year-old/leaf3.png"
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex-1 h-full bg-green-500">
            <div className="relative w-full h-full min-h-[50vh]">
              <Image
                alt="Noah"
                layout="fill"
                className="object-cover"
                src={`/assets/1-year-old/noah-${randomNumber}.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
