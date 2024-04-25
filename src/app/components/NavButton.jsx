import React from "react";
import Link from "next/link";

function NavButton() {
  return (
    <div>
      <Link href={`./regeloversigt`}>Regel-oversigt</Link>
    </div>
  );
}

export default NavButton;
