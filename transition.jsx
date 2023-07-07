import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const TransitionedComponent = () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  TransitionedComponent.displayName = `Transitioned(${OgComponent.displayName || OgComponent.name || "Component"})`;

  return TransitionedComponent;
};

export default transition;
