import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import contentVariants from './components/animation/contentVariants';

const Home: NextPage = () => {
  return (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
        <p className="text-4xl mb-4 text-nord6">Breno Battaglin</p>
        <p className="text-base text-nord6">Computer Scientist</p>
        <p className="text-base text-nord6">Software Engineer</p>
        <p className="text-base text-nord6">Minimalist</p>
      </div>
    </motion.div>
  )
}

export default Home;
