"use client";

import { useState } from "react";
import Story from "./story";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const handleOpen = () => {
    setFade(true);

    setTimeout(() => {
      setOpen(true);
    }, 700);
  };

  if (open) return <Story />;

  return (
    <div className={`home ${fade ? "fade-out" : ""}`}>

      {/* ambient blur */}
      <div className="ambient ambient1"></div>
      <div className="ambient ambient2"></div>

      <div className="letter" onClick={handleOpen}>
        💌
        <p>click to open</p>
      </div>

    </div>
  );
}