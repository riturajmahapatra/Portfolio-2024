import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function Contact() {
  return (
    <div>
      <motion.section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 ">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:example@gmail.com">
            riturajmahapatra@gmail.com
          </a>{' '}
          or through this form.
        </p>

        <form className="mt-10 flex  flex-col dark:text-black">
          <input
            className="h-14 px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 border rounded-lg borderBlack p-4  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          {/* <SubmitBtn /> */}
        </form>
      </motion.section>
    </div>
  );
}

export default Contact;
