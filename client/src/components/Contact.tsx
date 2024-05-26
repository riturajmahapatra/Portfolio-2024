import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa6';
import axios from 'axios';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}
function Contact() {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const data: ContactForm = { name, email, message };

    try {
      const response = await axios.post('/send-email', data);
      console.log('enail sent sucessfully', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

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

        <form
          className="mt-10 flex gap-3  flex-col dark:text-black"
          onSubmit={submitHandler}
        >
          <input
            className="h-14 px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="name"
            type="text"
            required
            maxLength={50}
            placeholder="Your Name"
          />
          <input
            className="h-14 px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52  border rounded-lg borderBlack p-4  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          >
            Submit{' '}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
          </button>
        </form>
      </motion.section>
    </div>
  );
}

export default Contact;