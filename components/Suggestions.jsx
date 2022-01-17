import React from "react";
import { GiftIcon, CashIcon, HeartIcon } from "@heroicons/react/solid";
import CopyToClipboard from "./CopyToClipboard";

const options = [
  {
    title: "Baby Infanti",
    icon: <GiftIcon className="w-8 h-8" />,
    description: (
      <>
        <ul className="space-y-2 list-disc">
          <li>
            Entra a{" "}
            <a
              href="http://www.listabebes.comexa.com.pe/publico/"
              target="_blank"
              rel="noreferrer"
            >
              http://www.listabebes.comexa.com.pe/publico/
            </a>
          </li>
          <li>
            Ingresa nuestro código de lista de bebé:{" "}
            <span className="italic font-bold">BIS4678842001</span>
          </li>
          <li>
            Encontrarás la lista de sugerencias que hemos creado, escoge el
            presente que más te guste y búscalo en la página:{" "}
            <a
              href="https://www.babyinfanti.com.pe/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.babyinfanti.com.pe/
            </a>
          </li>
          <li>
            En el proceso de compra (checkout) encontrarás un campo que dice:{" "}
            <span className="italic font-bold">
              ¿Su compra es parte de una lista de bebé?
            </span>
            , dale <span className="italic font-bold">Si</span> e ingresa
            nuestro código de lista de bebé.
          </li>
          <li>
            Si aún tienes dudas sobre el proceso de compra con código de lista
            de bebé, puedes seguir este tutorial:{" "}
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
            className="flex py-4 pl-3 pr-12 bg-white rounded-md shadow-md"
            key={option.title}
          >
            <div className="mr-4 text-primary">{option.icon}</div>
            <div>
              <h4 className="mb-2 text-2xl text-primary">{option.title}</h4>
              <div className="leading-5 text-gray-500">
                {option.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
