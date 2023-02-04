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
        {/* Card */}
        <div className="shadow-lg -rotate-2 rounded-sm w-[70vw] h-[95vh] lg:h-[80vh] border-8 border-white flex flex-col-reverse lg:flex-row">
          {/* Box 1 */}
          <div className="flex-1 h-full bg-[#F9F8FC] relative overflow-hidden">
            <div className="absolute bottom-0 -left-24 w-[520px] h-[520px]">
              <Image
                alt="baby dino 1"
                layout="fill"
                src="/assets/1-year-old/dino.png"
              />
            </div>

            <div className="absolute top-[100px] left-[100px] w-[120px] h-[120px] rotate-[20deg]">
              <Image
                alt="tero"
                layout="fill"
                src="/assets/1-year-old/tero.png"
              />
            </div>

            <div className="absolute top-[100px] -right-16 w-[240px] h-[240px] rotate-[30deg]">
              <Image
                alt="patas"
                layout="fill"
                src="/assets/1-year-old/patas.png"
              />
            </div>

            <div className="absolute bottom-[70px] right-6 text-center font-body space-y-2 font-bold">
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
