import { useState } from "react";

const CustomForm = ({ english, status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email;
    email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {!status && (
        <>
          <input
            placeholder={english ? "E-Mail Adress" : "E-Mail Adresse"}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            isRequired
          ></input>
          <button type="submit" formVales={[email]}>
            Anmelden
          </button>
        </>
      )}

      {status === "sending" && (
        <div className={"formStatus"}>Einen Moment, bitte...</div>
      )}
      {status === "error" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={"formStatus"}
        />
      )}
      {status === "success" && (
        <div className={"formStatus"}>Danke für die Anmeldung!</div>
      )}
      
    </form>
  );
};

export default CustomForm;
