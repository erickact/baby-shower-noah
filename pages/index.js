import React from "react";
import Container from "../components/Container";
import CurvedText from "../components/CurvedText";
import Hearts from "../components/Hearts";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <>
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
              className="relative z-10 drop-shadow-xl"
            />
            <Hearts />
          </Container>
          <Container>
            <div className="mt-24 text-center">
              <p className="mb-4 text-shadow uppercase font-body text-gray-500">
                Acompáñanos a celebrar el baby shower de:{" "}
              </p>
              <h1 className="font-mono text-6xl text-primary mb-4">
                Noah Reymundo
              </h1>
              <div className="flex items-center font-body justify-around border-y-2 py-2 border-primary border-opacity-40">
                <div>
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

                <div>
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
            <p className="text-gray-600 font-body text-xl max-w-sm">
              Tu presencia y cariño será el mejor regalo para Noah, en caso
              desees darle un presente, puedes hacerlo a través de:
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
