import React, { useEffect, useState } from "react";
import Header from "./Header";

const DropHeader = () => {
  const [isDrop, setIsDrop] = useState("-150px");

  useEffect(() => {
    const handleScroll = () => {
      setIsDrop(window.scrollY > 0 ? "0px" : "-150px");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ top: isDrop }} className="header_drop">
      <Header />
    </div>
  );
};

export default DropHeader;
