import ham from '../images/ham.svg';

function Header() {
  return (
    <div>
      <nav className=" mt-4 block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 text-2xl font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            Rituraj Mahapatra
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1  text-md antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li className="block p-1  text-md  font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li className="block p-1  text-md antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle  text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <img src={ham} className="h-full w-auto" alt="Hamburger" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
