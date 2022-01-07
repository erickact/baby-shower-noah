import React from "react";
import { GiftIcon, CashIcon, HeartIcon } from "@heroicons/react/solid";
import CopyToClipboard from "./CopyToClipboard";

const options = [
  {
    title: "Baby Infanti",
    icon: <GiftIcon className="w-8 h-8" />,
    description: (
      <>
        <ul className="list-disc">
          <li>
            Nuestro código de lista de regalos es:{" "}
            <span className="font-bold">BIS4678842001</span>
          </li>
          <li>
            Para comprar tu regalo por la página web, puedes seguir este
            tutorial:{" "}
            <a
              href="https://www.facebook.com/babyinfantistoreperu/videos/3214000872062768/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.facebook.com/babyinfantistoreperu/videos/3214000872062768/
            </a>
          </li>
          <li>
            También puedes realizar la compra vía WhatsApp en tu tienda de
            preferencia:{" "}
            <a
              href="https://infanti.wordlatin.com/whatsapp/"
              target="_blank"
              rel="noreferrer"
            >
              https://infanti.wordlatin.com/whatsapp/
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Ahorro de tiempo",
    icon: <CashIcon className="w-8 h-8" />,
    description: (
      <>
        Si prefieres delegarnos la responsabilidad de elegir el presente, te
        ayudamos con unos números de cuenta (titular: Paúl Díaz):{" "}
        <div className="my-2">
          BCP:{" "}
          <p>
            19333679668064 <CopyToClipboard text="19333679668064" />
          </p>{" "}
          <p>
            00219313367966806410 <CopyToClipboard text="00219313367966806410" />
          </p>
        </div>
        <div>
          Interbank:{" "}
          <p>
            8213212252440 <CopyToClipboard text="8213212252440" />
          </p>{" "}
          <p>
            00382101321225244069 <CopyToClipboard text="00382101321225244069" />
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Recuerda",
    icon: <HeartIcon className="w-8 h-8" />,
    description: (
      <>
        Cualquier otro detalle de tu parte, siempre será bien recibido con mucho
        cariño.
      </>
    ),
  },
];

const Suggestions = () => {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => {
        return (
          <div
            className="flex bg-white pl-3 pr-12 py-4 rounded-md shadow-md"
            key={option.title}
          >
            <div className="mr-4 text-primary">{option.icon}</div>
            <div>
              <h4 className="text-2xl text-primary mb-2">{option.title}</h4>
              <div className=" text-gray-500">{option.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
