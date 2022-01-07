import React, { useEffect } from "react";
import Container from "../components/Container";
import CurvedText from "../components/CurvedText";
import Hearts from "../components/Hearts";
import Image from "next/image";
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
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8">
          <Container>
            <CurvedText>BABY SHOWER</CurvedText>
          </Container>
          <Container>
            <div>
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
                <div className="min-w-[8rem]">
                  <h3>S Á B A D O</h3>
                  <h4 className="text-5xl text-primary">ENE</h4>
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

                <div className="min-w-[8rem]">
                  <h2 className="text-6xl text-quaternary ">15</h2>
                  <span>5.30 PM</span>
                </div>
              </div>

              <div className="py-2 text-gray-500 font-body">
                <p>JR PEDRO CONDE 178 - LINCE</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="min-h-screen bg-blue-50">
        <div className="py-8">
          <Container>
            <p className="max-w-sm mx-auto mb-8 text-xl text-center text-gray-600 font-body">
              Tu presencia y cariño será el mejor regalo para Noah, en caso
              desees darle un presente, puedes hacerlo de las siguientes
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
