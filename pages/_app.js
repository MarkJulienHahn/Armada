import { useRouter } from "next/router";
import Nav from "../components/Nav";

import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const location = useRouter();

  return (
    <>
      <Nav />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
