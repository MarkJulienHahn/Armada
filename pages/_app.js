import { useRouter } from "next/router";
import Nav from "../components/Nav";

import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import { useState } from "react";
import RunningTitle from "../components/RunningTitle";
import RunningTitleDouble from "../components/RunningTitleDouble";

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  const [runningTitle, setRunningTitle] = useState("");
  const [runningTitleDouble, setRunningTitleDouble] = useState("");

  return (
    <>
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
