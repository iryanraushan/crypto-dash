import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; 
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 md:bottom-20 md:right-20 cursor-pointer transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaRegArrowAltCircleUp
        className="text-4xl text-primary-color"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default BackToTop;
