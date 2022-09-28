import React from "react";
import Link from "next/link";

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className="footerWrapper">
      <p>
        {currentYear} © Armada Theater |{" "}
        <Link href="/impressum" target="_blank">
          Impressum
        </Link>{" "}
        |{" "}
        <Link href="/datenschutz" target="_blank" rel="noreferrer">
          Datenschutz
        </Link>{" "}
        |{" "}
        <a href="https://www.instagram.com/armada.theater/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Footer;
