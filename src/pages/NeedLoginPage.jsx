import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NeedLoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    // Cleanup the timer in case the user navigates away
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#007683] to-[#00f5e1]">
      <motion.div
        className="bg-[#1d2c4f] rounded-lg shadow-lg max-w-md w-full text-center p-8 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold text-white mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          You need to login
        </motion.h1>
        <p className="text-white text-lg mb-6">
          You must be logged in to access this page. You will be redirected to
          the login page shortly...
        </p>
      </motion.div>
    </div>
  );
};

export default NeedLoginPage;
