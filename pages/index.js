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
            <Image
              src="/bear.png"
              alt="babyBear"
              width="440"
              height="390"
              className="relative z-10 drop-shadow-xl move"
            />
            <Hearts />
          </Container>
          <Container>
            <div className="mt-24 text-center">
              <p className="mb-4 text-shadow uppercase font-body text-gray-500">
                Acompáñanos a celebrar el baby shower de:{" "}
              </p>
              <h1 className="font-mono text-6xl text-primary mb-4 move">
                Noah Reymundo
              </h1>
              <div className="flex items-center font-body justify-around border-y-2 py-2 border-primary border-opacity-40">
                <div className="min-w-[8rem]">
                  <h3>S Á B A D O</h3>
                  <h4 className=" text-5xl text-primary">ENE</h4>
                </div>

                <div>
                  <HeartIcon className="w-6 text-primary rotate-[-45deg]" />
                </div>

                <div className="flex flex-col font-bold leading-none text-xl text-brown">
                  <span>2</span>
                  <span>0</span>
                  <span>2</span>
                  <span>2</span>
                </div>

                <div>
                  <HeartIcon className="w-6 text-primary rotate-[45deg]" />
                </div>

                <div className="min-w-[8rem]">
                  <h2 className="text-quaternary text-6xl ">15</h2>
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
            <p className="text-gray-600 font-body text-xl max-w-sm mx-auto text-center mb-8">
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
