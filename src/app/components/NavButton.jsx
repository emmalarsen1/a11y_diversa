import React from "react";
import Link from "next/link";

function NavButton() {
  return (
    <div class="m-4">
      <Link class=" bg-[#69e3fc] place-items-center hover:bg-[#02E8FE] py-3 px-5  rounded-lg active:bg-[#4BCBE0] text-center font-['Libre_Baskerville'] text-lg font-semibold" href={`./regeloversigt`}>
        Ally-regler
      </Link>
    </div>
  );
}

export default NavButton;
