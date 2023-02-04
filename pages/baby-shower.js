import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../components/Container";
import CurvedText from "../components/CurvedText";
import Hearts from "../components/Hearts";
import Head from "next/head";
import { HeartIcon } from "@heroicons/react/solid";
import Suggestions from "../components/Suggestions";
import VanillaTilt from "vanilla-tilt";

const Home = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".move"), {
      max: 15,
      speed: 400,
      scale: 1.1,
      "mouse-event-element": document.body,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Baby Shower - Noah Reymundo</title>
        <meta
          name="description"
          content="Acompáñanos a celebrar el baby shower de Noah Reymundo (29/01/2022)"
        />
        <meta
          property="og:description"
          content="Acompáñanos a celebrar el baby shower de Noah Reymundo (29/01/2022)"
        />
        <meta property="og:image" content="/social.png" />
        <meta property="og:title" content="Baby Shower - Noah Reymundo" />
      </Head>
      <div className="overflow-x-hidden bg-gray-50">
        <div className="py-8">
          <Container>
            <CurvedText>BABY SHOWER</CurvedText>
          </Container>
          <Container>
            <div className="-mt-16 sm:mt-0">
              <img
                src="/bear.png"
                alt="babyBear"
                className="relative z-10 max-w-full mx-auto lg:h-96 drop-shadow-xl move"
              />
            </div>
            <Hearts />
          </Container>
          <Container>
            <div className="mt-12 text-center">
              <p className="mb-4 text-gray-500 uppercase text-shadow font-body">
                Acompáñanos a celebrar el baby shower de:{" "}
              </p>
              <h1 className="mb-4 font-mono text-6xl text-primary move">
                Noah Reymundo
              </h1>
              <div className="flex items-center justify-around py-2 font-body border-y-2 border-primary border-opacity-40">
                <div className="min-w-[5rem] sm:min-w-[8rem]">
                  <h3 className="text-xs sm:text-md">S Á B A D O</h3>
                  <h4 className="text-3xl sm:text-5xl text-primary">ENE</h4>
                </div>

                <div>
                  <HeartIcon className="w-6 text-primary rotate-[-45deg]" />
                </div>

                <div className="flex flex-col text-xl font-bold leading-none text-brown">
                  <span>2</span>
                  <span>0</span>
                  <span>2</span>
                  <span>2</span>
                </div>

                <div>
                  <HeartIcon className="w-6 text-primary rotate-[45deg]" />
                </div>

                <div className="min-w-[5rem] sm:min-w-[8rem]">
                  <h2 className="text-4xl sm:text-6xl text-quaternary ">29</h2>
                  <span>6.00 PM</span>
                </div>
              </div>

              <div className="py-2 text-sm text-gray-500 font-body">
                <p>Mz A Lt 19, Ramos Larrea, Imperial, Cañete</p>
                <p>
                  Referencia: a una cuadra del Mercado Virgen del Carmen de
                  Ramos Larrea
                </p>
                <p>
                  Aquí puedes encontrar el lugar en un mapa 👉{" "}
                  <a
                    href="https://www.google.com/maps/place/13%C2%B003'24.4%22S+76%C2%B021'18.1%22W/@-13.056763,-76.3555842,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0xf4f206194ac1eef4!7e2!8m2!3d-13.0567632!4d-76.3550374"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Maps
                  </a>
                </p>
                <p className="font-bold">*Confirmar asistencia*</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className=" bg-blue-50">
        <div className="py-8">
          <Container>
            <p className="max-w-sm mx-auto mb-8 text-xl text-center text-gray-600 font-body">
              Tu presencia y cariño será el mejor regalo para Noah; sin embargo,
              si deseas darle un presente, puedes hacerlo de las siguientes
              maneras:
            </p>
            <Suggestions />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
