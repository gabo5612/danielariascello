"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import { useContext } from "react";
import MobileMenu from "./mobile";
import DesktopMenu from "./desktop";

export default function NavBar() {
  const context = useContext(Context);
  return (
    <nav>
      {context.matches ? (
        <DesktopMenu />
      ) : (
        <>
          <div
            className="absolute top-4 right-4 z-10"
            onClick={() => context.handleMenu()}
          >
            {!context.menuIsOpen && (
              <Image src="/assets/menu.svg" alt="menu" width="45" height="45" />
            )}
          </div>
          {context.menuIsOpen && <MobileMenu />}
        </>
      )}
    </nav>
  );
}
