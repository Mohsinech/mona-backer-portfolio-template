import React from "react";
import Link from "next/link";
import { socials } from "constants/data";
import Image from "next/image";
import NavList from "components/ui/navlist/NavList";
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-whity px-4 py-2">
      <Link href="/">
        <h1 className="font-montreal font-medium max-sm:text-lg">Mona Baker</h1>
      </Link>
      <div className="flex flex-col max-sm:hidden">
        <p className="font-montreal text-sm font-medium">London, Uk</p>
        <p className="font-montreal text-sm font-medium">
          Photographer & Art Direction
        </p>
      </div>
      <div className="flex items-center gap-8 max-sm:hidden">
        {socials.map((link) => (
          <NavList key={link.social} {...link} />
        ))}
      </div>
      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-400 text-sm">
        MB
        <Image
          src="/assets/images/avatar.jpg"
          layout="fill"
          alt="profile"
          className="absolute cursor-pointer rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
