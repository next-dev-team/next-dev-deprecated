import { GoogleCircleFilled } from '@ant-design/icons';

/* eslint-disable @next/next/no-img-element */
export const tailusButton = () => {
  return [
    {
      divider: true,
      title: 'tailus button',
      render: (
        <button className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
          <div className="flex items-center justify-center space-x-2">
            <GoogleCircleFilled className="text-lg" />
            <span className="block text-sm font-medium tracking-wide text-blue-700 w-max">
              with Google
            </span>
          </div>
        </button>
      ),
    },
    {
      divider: true,

      title: 'elements button',
      render: (
        <div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Primary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Secondary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Success
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Danger
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Warning
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Info
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Light
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Dark
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            Link
          </button>

          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Primary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-purple-600 uppercase transition duration-150 ease-in-out border-2 border-purple-600 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Secondary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-green-500 uppercase transition duration-150 ease-in-out border-2 border-green-500 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Success
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-red-600 uppercase transition duration-150 ease-in-out border-2 border-red-600 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Danger
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-yellow-500 uppercase transition duration-150 ease-in-out border-2 border-yellow-500 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Warning
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-400 uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Info
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-gray-200 uppercase transition duration-150 ease-in-out border-2 border-gray-200 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Light
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-gray-800 uppercase transition duration-150 ease-in-out border-2 border-gray-800 rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Dark
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Primary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-purple-600 uppercase transition duration-150 ease-in-out border-2 border-purple-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Secondary
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-green-500 uppercase transition duration-150 ease-in-out border-2 border-green-500 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Success
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-red-600 uppercase transition duration-150 ease-in-out border-2 border-red-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Danger
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-yellow-500 uppercase transition duration-150 ease-in-out border-2 border-yellow-500 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Warning
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-400 uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Info
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-gray-200 uppercase transition duration-150 ease-in-out border-2 border-gray-200 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Light
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-gray-800 uppercase transition duration-150 ease-in-out border-2 border-gray-800 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Dark
          </button>
          <button
            type="button"
            className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
          <button
            type="button"
            className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Button
          </button>
        </div>
      ),
    },
  ];
};
