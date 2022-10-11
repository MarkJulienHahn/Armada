import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Nav from "../components/Nav";

import * as ga from '../lib/ga'

import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";

import RunningTitle from "../components/RunningTitle";
import RunningTitleDouble from "../components/RunningTitleDouble";
import Cookies from "../components/Cookies";

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  const [runningTitle, setRunningTitle] = useState("");
  const [runningTitleDouble, setRunningTitleDouble] = useState("");

  const [cookieActive, setCookieActive] = useState(true);

  const acceptCookie = () => {
    setCookieActive(false), localStorage.setItem("cookieSeen", "true");
  }

  useEffect( () => {
    const data = localStorage.getItem("cookieSeen");
    if (data) {
      acceptCookie(data);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    location.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      location.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [location.events])

  return (
    <>
      {cookieActive ? <Cookies setCookieActive={acceptCookie} /> : ""}

      <Nav />

      <RunningTitle current={runningTitle} />
      <RunningTitleDouble current={runningTitleDouble} />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <Component
            {...pageProps}
            setRunningTitle={setRunningTitle}
            setRunningTitleDouble={setRunningTitleDouble}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
