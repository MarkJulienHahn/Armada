import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../components/Nav";

import * as ga from "../lib/ga";

import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";

import RunningTitle from "../components/RunningTitle";
import RunningTitleDouble from "../components/RunningTitleDouble";
import Cookies from "../components/Cookies";
import Newsletter from "../components/Newsletter";

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  const [newsletter, showNewsletter] = useState(true);
  const [runningTitle, setRunningTitle] = useState("");
  const [runningTitleDouble, setRunningTitleDouble] = useState("");

  const [cookieActive, setCookieActive] = useState(true);

  const acceptCookie = () => {
    setCookieActive(false), localStorage.setItem("cookieSeen", "true");
  };

  useEffect(() => {
    const data = localStorage.getItem("cookieSeen");
    if (data) {
      acceptCookie(data);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    location.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      location.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [location.events]);

  return (
    <>
      <Newsletter newsletter={newsletter} showNewsletter={showNewsletter} />
      {cookieActive ? <Cookies setCookieActive={acceptCookie} /> : ""}

      <Head>
        <title>Armada Theater</title>
        <meta
          name="description"
          content="Armada Theater is an independent theatre-collective from Germany. It represents unconventional theater-productions for kids, adolescents and grown-ups."
        />
      </Head>

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
            showNewsletter={showNewsletter}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
