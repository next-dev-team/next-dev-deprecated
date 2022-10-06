// https://tailwind-elements.com/docs/standard/components/buttons/

import { ArrowRightOutlined } from '@ant-design/icons';
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { _omit } from 'next-dev-utils/src';
import Button from '../display/Button';

type IVariant = 'outline' | 'primary' | 'link';
type IType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'error'
  | 'dark'
  | 'light';
type IShape = 'rounded' | 'square' | 'block';

export type IButton = {
  /**
   * container clx
   */
  variant?: IVariant;
  title?: string;
  color?: IType;
  shape?: IShape;
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textTransform?: CSSProperties['textTransform'];
} & Omit<ButtonHTMLAttributes<any>, 'color'>;

function Blog1(props: IButton) {
  const {
    className,
    variant = 'primary',
    title = 'button',
    color = 'primary',
    shape = 'square',
    children,
    isDisabled,
    leftIcon,
    rightIcon,
    textTransform,
    ...rest
  } = props;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <Button
          title="Read More"
          rightIcon={<ArrowRightOutlined className="absolute right-1.5" />}
        />
      </div>
    </div>
  );
}

Blog1.displayName = 'Blog1';

export default Blog1;
