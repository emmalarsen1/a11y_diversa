import React from "react";
import Link from "next/link";

function NavButton() {
  return (
    <>
      <div class="m-4 desktop-icon hidden md:block">
        <Link class=" bg-[#69e3fc] place-items-center hover:bg-[#02E8FE] py-3 px-5  rounded-lg active:bg-[#4BCBE0] text-center font-['Libre_Baskerville'] text-lg font-semibold" href={`/regeloversigt`}>
          A11y-regler
        </Link>
      </div>
      <div class="mobile-icon md:hidden">
        <Link href={`/regeloversigt`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="30" width="30" id="Bullet-List--Streamline-Core.svg">
            <desc>Bullet List Streamline Icon: https://streamlinehq.com</desc>
            <g id="bullet-list--points-bullet-unordered-list-lists-bullets">
              <path id="Vector" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M1 3c0.27614 0 0.5 -0.22386 0.5 -0.5S1.27614 2 1 2c-0.276142 0 -0.5 0.22386 -0.5 0.5s0.223858 0.5 0.5 0.5Z" stroke-width="1"></path>
              <path id="Vector_2" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h9" stroke-width="1"></path>
              <path id="Vector_3" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M1 7.5c0.27614 0 0.5 -0.22386 0.5 -0.5s-0.22386 -0.5 -0.5 -0.5c-0.276142 0 -0.5 0.22386 -0.5 0.5s0.223858 0.5 0.5 0.5Z" stroke-width="1"></path>
              <path id="Vector_4" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7h9" stroke-width="1"></path>
              <path id="Vector_5" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M1 12c0.27614 0 0.5 -0.2239 0.5 -0.5S1.27614 11 1 11c-0.276142 0 -0.5 0.2239 -0.5 0.5s0.223858 0.5 0.5 0.5Z" stroke-width="1"></path>
              <path id="Vector_6" stroke="#69e3fc" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5h9" stroke-width="1"></path>
            </g>
          </svg>
        </Link>
      </div>
    </>
  );
}

export default NavButton;
