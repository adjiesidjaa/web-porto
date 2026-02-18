import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "light" ? "dark" : "light");
      return;
    }

    document.startViewTransition(() => {
      setTheme(theme === "light" ? "dark" : "light");
    });
  };

  if (!mounted) {
    return <div className="p-2 rounded-full w-10 h-10" />;
  }

  const iconVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 relative w-10 h-10 flex items-center justify-center overflow-hidden"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Moon size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Sun size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
