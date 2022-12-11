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
    <article className="group">
      <img
        alt={dataItems?.alt || dataItems?.cover}
        src={dataItems?.cover}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">
            {dataItems?.title}
          </h3>
        </a>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {dataItems?.description}
        </p>
        {dataItems?.onClickLink && (
          <a
            href={dataItems?.link}
            {...{
              target: dataItems?.linkTarget,
              rel: 'noreferrer',
            }}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer"
          >
            {dataItems?.linkText}
            <span
              aria-hidden="true"
              className="block transition group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
