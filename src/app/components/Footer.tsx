import Image from "next/image";
import logo from "@images/4food-logo-branca-removebg-preview.png";

export function Footer() {
  return (
    <footer className="bg-black py-20 px-28 text-white flex gap-14">
      <div className="w-80">
        <Image
          src={logo}
          alt="Logo 4Food"
          width={180}
          className="hover:scale-95 hover:opacity-60 duration-300"
        />
        <p className="text-gray-300 mt-10 text-lg">
          Lorem ipsum dolor sit amet, litem adipiscing elit. Cras tristique
          feugiat.
        </p>
      </div>
      <div className="">
        <h2 className="text-lg font-bold">PÁGINAS</h2>
      </div>
      <div className="text-lg font-bold">
        <h2 className="">SUPORTE</h2>
      </div>
      <div className="">
        <h2 className="text-lg font-bold">CONHEÇA</h2>
      </div>
    </footer>
  );
}
