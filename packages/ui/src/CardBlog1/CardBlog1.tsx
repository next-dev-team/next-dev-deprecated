import React from 'react';

/**
 * @see https://www.hyperui.dev/components/marketing/blog-cards
 * @returns
 */

export type ICardProps = {
  dataItems: {
    title?: string;
    description?: string;
    date?: string;
    cover?: string;
  };
};
export default function CardBlog1(props: ICardProps) {
  const { dataItems = {} } = props;

  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src={dataItems?.cover}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500">{dataItems?.date}</time>

        <h3 className="mt-0.5 text-lg text-gray-900">{dataItems?.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {dataItems?.description}
        </p>
      </div>
    </article>
  );
}
