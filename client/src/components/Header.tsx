import { motion } from 'framer-motion';
import { links } from '../../lib/data';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa6';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="z-[999] relative">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
          //backpalte of my nav

          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>
        <nav
          className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2
        py-2"
        >
          <ul className="flex  w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem]  text-gray-500 sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <a
                  className="flex items-center justify-center w-full px-3 mt-12 max-md:mt-2 hover:text-gray-700 transition-all"
                  href={link.hash}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="absolute flex top-[1.1rem] right-[2rem] h-12 -translate-x-1/2 py-2">
          <button
            type="submit"
            className="flex group items-center justify-center gap-2 h-[3rem] w-[8rem] bg-transparent border text-gray-500 rounded-full outline-none transition-all bg-opacity-80 backdrop-blur-[0.7rem] max-lg:hidden opacity-0 hover:opacity-100"
            onClick={() => navigate('/admin')}
          >
            Login{' '}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
