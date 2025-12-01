import { motion } from "framer-motion";
import logo from "../img/logo.png"
const Logo = () => {
  return (
    <motion.div 
      className="flex items-center justify-center gap-1 py-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
          <header className='center'>
        <img src={logo} alt =''/>
    </header>
    </motion.div>
  );
};

export default Logo;
