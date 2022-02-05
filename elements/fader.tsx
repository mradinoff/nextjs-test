import React, { useEffect, useState, ReactNode } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView, defaultFallbackInView } from "react-intersection-observer";

type FaderProps = {
  children: ReactNode;
  className?: string;
  variant?: string;
  delay?: number;
  exit?: boolean;
};

const Fader: React.FC<FaderProps> = ({
  children,
  className,
  variant = "fade",
  delay = 0,
  exit = false
}) => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.1
      },
      y: 0
    }
  };

  const scaleVariant = {
    hidden: { scale: 0.95 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay * 0.1
      }
    }
  };

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay * 0.1
      }
    }
  };
  defaultFallbackInView(true);
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ fallbackInView: true });
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (inView && !exit) {
      controls.start("visible");
      setLoaded(true);
    } else if (!inView && !loaded) {
      controls.start("hidden");
    } else if (exit) {
      controls.start("hidden");
    }
  }, [controls, inView, exit]);

  let usedVariant;
  if (variant === "scale") {
    usedVariant = scaleVariant;
  } else if (variant === "opacity") {
    usedVariant = opacityVariant;
  } else {
    usedVariant = fadeInVariant;
  }

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      className={className}
      animate={controls}
      variants={usedVariant}
    >
      {children}
    </motion.div>
  );
};

export default Fader;
