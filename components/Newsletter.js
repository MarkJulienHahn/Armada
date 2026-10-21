import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "next/image";

import CustomForm from "./CustomForm";
import image from "../public/images/note-newsletter.png";

const url = `https://armada-theater.us21.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

const Newsletter = ({ newsletter, showNewsletter }) => {
  const hideNewsletter = () => {
    showNewsletter(false), sessionStorage.setItem("newsletterSeen", "true");
  };

  useEffect(() => {
    const data = sessionStorage.getItem("newsletterSeen");
    if (data) {
      hideNewsletter(data);
    }
  }, []);

  return (
    <div
      className="newsletterWrapper"
      style={{
        // geschlossen: unsichtbar UND nicht mehr klickbar, sonst blockiert
        // der Zettel die Objekte unten rechts auf der Startseite
        opacity: newsletter ? "1" : "0",
        pointerEvents: newsletter ? "auto" : "none",
        visibility: newsletter ? "visible" : "hidden",
      }}
    >
      <Image src={image} fill />
      <div className="newsletterClose" onClick={hideNewsletter}>
        X
      </div>
      <div className="newsletterInner">
        <p>
          Willst du up-to-date bleiben? Dann registriere dich hier für unseren
          Newsletter!
        </p>
        <span style={{ width: "500px", height: "500px" }}></span>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Newsletter;
