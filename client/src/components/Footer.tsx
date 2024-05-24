import flagImg from '../assets/india.svg';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Rituraj. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          Made with love from India{' '}
          <span>
            <img
              src={flagImg}
              alt=""
              className="h-4 my-3 w-full inline-block a"
            />
          </span>
          <br />
        </span>{' '}
        built with React, TypeScript, Tailwind CSS, Framer Motion,Express,
        Nodemailer, Vercel hosting.
      </p>
    </footer>
  );
}
