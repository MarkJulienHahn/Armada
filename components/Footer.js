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
        <Link href="/datenschutz" target="_blank">
          Datenschutz
        </Link>{" "}
        |{" "}
        <a href="https://www.instagram.com/armada.theater/" target="_blank">
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Footer;
