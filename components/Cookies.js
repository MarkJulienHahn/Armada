import Image from "next/image";
import Link from "next/link"

import cookies from "../public/images/Cookies.gif";

const Cookies = ({ setCookieActive }) => {
  return (
    <div className="cookiesWrapper">
      <Image src={cookies} />

      <div className="cookiesText">
        <p>
          Diese Website benutzt Cookies. Wenn Sie unsere Website weiter nutzen,
          stimmen Sie der Verwendung von Cookies zu.{" "}
        </p>
        <div>
          <div className="cookieButton cookieYes" onClick={() => setCookieActive(false)}>
            <h2>ok</h2>
          </div>
          <div className="cookieButton cookieNo" onClick={() => setCookieActive(false)}>
            <Link href="/datenschutz"><h2>mehr Info</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
