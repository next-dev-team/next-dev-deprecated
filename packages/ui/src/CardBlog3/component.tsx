import React from 'react';

/**
 * @see html source https://www.hyperui.dev/components/marketing/blog-cards#component-2
 * @returns
 */

export type ICardBlog2Props = {
  dataItems: {
    title?: string;
    description?: string;
    date?: string;
    cover?: string;
    alt?: string;
    /**
     * active when no onClickLink is provided
     */
    link?: string;
    onClickLink?: React.MouseEventHandler<HTMLAnchorElement>;
    linkText?: string;
    linkTarget?: React.HTMLAttributeAnchorTarget;
  };
};
export default function Component(props: ICardBlog2Props) {
  const { dataItems = {} } = props;

  return (
    <>
      <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
        <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1674&amp;q=80"
            alt="art cover"
            loading="lazy"
            className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="sm:p-2 sm:pl-0 sm:w-4/6">
          <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
            Jul 27 2022
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
          </h3>
          <p className="my-6 text-gray-600 dark:text-gray-300">
            Laudantium in, voluptates ex placeat quo harum aliquam totam,
            doloribus eum impedit atque...
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              Tailwindcss
            </a>
            <a
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              VueJS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
