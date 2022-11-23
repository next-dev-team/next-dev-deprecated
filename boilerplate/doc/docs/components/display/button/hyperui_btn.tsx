export const useHyperuiBtn = () => {
  return [
    {
      divider: true,
      title: 'light',
      render: (
        // <!-- Base -->
        <a
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
          href="##"
        >
          hyperui button
        </a>
      ),
    },
    {
      title: 'light',
      render: (
        <a
          className="inline-block px-12 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
          href="##"
        >
          hyperui button
        </a>
      ),
    },
    {
      title: 'Base hyperui ',
      render: (
        // <!-- Base -->

        <a
          className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
          href="##"
        >
          <span className="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
            hyperui
          </span>
        </a>
      ),
    },
    {
      title: 'Pill',
      render: (
        <a
          className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
          href="##"
        >
          <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
            hyperui
          </span>
        </a>
      ),
    },
    {
      title: 'Pill',
      render: (
        <a
          className="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="##"
        >
          <span className="sr-only"> hyperui icon </span>

          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      ),
    },
    {
      title: 'Border',
      render: (
        // <!-- Border -->

        <a
          className="inline-block p-3 text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring"
          href="##"
        >
          <span className="sr-only"> Download </span>

          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      ),
    },
    {
      title: 'Border',
      render: (
        // <!-- Base -->

        <a
          className="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring"
          href="##"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-white border border-current">
            Download
          </span>
        </a>
      ),
    },
    {
      title: 'Border',
      render: (
        <>
          {/* <!-- Base - Right --> */}
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            href="##"
          >
            <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-4">
              Download
            </span>
          </a>
          {/* <!-- Border - Right --> */}
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring"
            href="##"
          >
            <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-4">
              Download
            </span>
          </a>
          {/* <!-- Base - Left --> */}
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            href="##"
          >
            <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Download
            </span>
          </a>
          {/* <!-- Border - Left --> */}
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring"
            href="##"
          >
            <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Download
            </span>
          </a>
          {/* <!-- Base --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          {/* <!-- Border --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          Simple and Expand with Rotate on Hover
          {/* <!-- Base - Right --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          {/* <!-- Border - Right --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:rotate-2 active:text-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          {/* <!-- Base - Left --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:-rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          {/* <!-- Border - Left --> */}
          <a
            className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:-rotate-2 active:text-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            Download
          </a>
          {/* <!-- Base --> */}
          <a
            className="relative inline-block group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
              Download
            </span>
          </a>
          {/* <!-- Hover --> */}
          <a
            className="relative inline-block group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
              Download
            </span>
          </a>
          {/* <!-- Left --> */}
          <a
            className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Download
            </span>
          </a>
          {/* <!-- Right --> */}
          <a
            className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-y-0 right-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Download
            </span>
          </a>
          {/* <!-- Bottom --> */}
          <a
            className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Download
            </span>
          </a>
          {/* <!-- Top --> */}
          <a
            className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Download
            </span>
          </a>
          {/* <!-- Base --> */}
          <a
            className="flex items-center justify-between px-5 py-3 transition-colors bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent group focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="font-medium text-white transition-colors group-active:text-indigo-500 group-hover:text-indigo-600">
              Find out more
            </span>

            <span className="flex-shrink-0 p-2 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
          {/* <!-- Border --> */}
          <a
            className="flex items-center justify-between px-5 py-3 text-indigo-600 transition-colors border border-current rounded-lg hover:bg-indigo-600 group active:bg-indigo-500 focus:outline-none focus:ring"
            href="#/download"
          >
            <span className="font-medium transition-colors group-hover:text-white">
              Find out more
            </span>

            <span className="flex-shrink-0 p-2 ml-4 bg-white border border-indigo-600 rounded-full group-active:border-indigo-500">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
          {/* <!-- Base --> */}
          <div className="relative inline-block px-8 py-3 text-white bg-indigo-600 rounded-full group">
            <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
              Follow On Social
            </span>

            <ul className="absolute inset-0 flex items-center justify-center space-x-3 transition-opacity opacity-0 group-hover:opacity-100">
              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/twitter"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/github"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/dribbble"
                >
                  <span className="sr-only"> Dribbble </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Border --> */}
          <div className="relative inline-block px-8 py-3 text-indigo-600 border border-current rounded-full group">
            <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
              Follow On Social
            </span>

            <ul className="absolute inset-0 flex items-center justify-center space-x-3 transition-opacity opacity-0 group-hover:opacity-100">
              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/twitter"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/github"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="block transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
                  href="#/dribbble"
                >
                  <span className="sr-only"> Dribbble </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- GitHub --> */}
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] rounded hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
            href="#/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {/* <!-- Twitter --> */}
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#55acee] border-2 border-[#55acee] rounded hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75"
            href="#/twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          {/* <!-- Dribbble --> */}
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#ea4c89] border-2 border-[#ea4c89] rounded hover:bg-transparent hover:text-[#ea4c89] focus:outline-none focus:ring active:opacity-75"
            href="#/dribbble"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {/* <!-- Facebook --> */}
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#3b5998] border-2 border-[#3b5998] rounded hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
            href="#/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
            </svg>
          </a>
          {/* <!-- LinkedIn --> */}
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#0077b5] border-2 border-[#0077b5] rounded hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
            href="#/linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
            </svg>
          </a>
        </>
      ),
    },
  ];
};
