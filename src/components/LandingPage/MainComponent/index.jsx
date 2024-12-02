import Button from "../../Common/Button";
import "./style.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex w-full lg:max-w-screen-xl max-w-screen-md h-screen mx-auto mt-24 flex-col md:flex-row">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track crypto through a public API in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>
          <RWebShare
            data={{
              text: "RCrypto made by Ryan Raushan",
              url: "",
              title: "CryptoTracker.",
            }}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img
          src={gradient}
          className="absolute h-[21rem] md:h-[27rem] w-40 md:w-48 rounded-[1rem] right-0 top-[5rem]"
        />
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
