// https://tailwind-elements.com/docs/standard/components/buttons/

import { ButtonHTMLAttributes, CSSProperties, ReactNode, useMemo } from 'react';
import { twMerge as tw } from 'tailwind-merge';
import { _omit } from 'next-dev-utils/src/_lodash/_omit';

type IVariant = 'outline' | 'primary' | 'link';
type IType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'error'
  | 'dark'
  | 'light';
type IShape = 'rounded' | 'square';

export type IButton = {
  /**
   * container clx
   */
  variant?: IVariant;
  title?: string;
  color?: IType;
  shape?: IShape;
  isDisabled?: boolean;
  isFull?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textTransform?: CSSProperties['textTransform'];
} & Omit<ButtonHTMLAttributes<any>, 'color'>;

export default function Button(props: IButton) {
  const {
    className,
    variant = 'primary',
    title,
    color = 'primary',
    shape = 'square',
    children,
    isDisabled,
    isFull,
    leftIcon,
    rightIcon,
    textTransform,
    ...rest
  } = props;

  /**
   * renderBtnClx base on variant
   */
  const renderVariant = useMemo(() => {
    //------- primaryColor ----------
    const primaryColor = {
      primary: tw(
        'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 fucus:text-white',
      ),
      dark: tw('bg-gray-800 hover:bg-gray-900 focus:ring-gray-300'),
      success: tw('bg-green-500 hover:bg-green-600 focus:ring-green-200'),
    } as any;

    //------- outlineColor ----------
    const outlineBase = tw(
      'border-2 border-blue-600 text-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out',
    );

    const outlineColor = {
      light: tw(
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300',
      ),
      primary: outlineBase,
      dark: tw(outlineBase, 'border-gray-900 hover:bg-gray-900 text-gray-900'),
      success: tw(outlineBase, 'border-green-500 text-green-5000'),
    } as any;

    /**
     * render variantType
     */
    const variantType = {
      primary: primaryColor[color],
      outline: outlineColor[color],
      link: tw(
        'font-medium text-xs leading-tight bg-transparent text-blue-600 focus:outline-none focus:ring-0 shadow-none focus:shadow-none  hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100  active:bg-gray-200',
      ),
    };

    const getColor = variantType?.[variant];

    // console.log('getColor', getColor);

    return getColor;
  }, [color, variant]);

  const renderShape = useMemo(() => {
    const shapeType = {
      rounded: tw('rounded-full'),
      square: tw('rounded'),
    } as Record<IShape, any>;
    return shapeType[shape];
  }, [shape]);

  const renderCommon = useMemo(() => {
    const renderDisabled = isDisabled && tw('opacity-50 cursor-not-allowed');
    const renderFull = isFull && tw('w-full');
    const renderTextColor = tw(
      color === 'light' ? 'text-gray-900' : 'text-white',
    );

    const combineCls = [
      renderTextColor,
      textTransform,
      renderDisabled,
      renderFull,
    ];

    return combineCls.filter((item) => item);
  }, [isDisabled, color, textTransform, isFull]);

  return (
    <button
      type="button"
      {..._omit(rest, isDisabled ? 'onClick' : '')}
      className={tw(
        ...renderCommon,
        'relative flex items-center capitalize  px-6 py-2.5 font-medium text-xs leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out gap-1',
        renderVariant,
        renderShape,
        className,
      )}
    >
      {leftIcon && leftIcon}
      {children || title}
      {rightIcon && rightIcon}
    </button>
  );
}

Button.displayName = 'Button';
