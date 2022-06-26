// https://tailwind-elements.com/docs/standard/components/buttons/

import { ButtonHTMLAttributes } from 'react';
import { twMerge as tw } from 'tailwind-merge';
import { _omit } from 'utils/dist/lodash/omit';

type IVariant = 'outline' | 'ghost' | 'disabled' | 'primary';
type IType = 'primary' | 'warning' | 'success' | 'error' | 'dark' | 'light';

export type IButton = {
  /**
   * container clx
   */
  ngClass?: string;
  variant?: IVariant;
  shape?: 'rounded' | 'square';
  title?: string;
  color?: IType;
  isDisabled?: boolean;
} & Omit<ButtonHTMLAttributes<any>, 'color'>;

export const Button = (props: IButton) => {
  const {
    className,
    variant = 'primary',
    title = 'button',
    color = 'primary',
    shape = 'square',
    children,
    isDisabled,
    ...rest
  } = props;

  /**
   * renderBtnClx base on variant
   */
  const renderVariant = () => {
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
    } as any;

    return variantType?.[variant];
  };

  const renderRound = shape === 'rounded' && tw('rounded-full');
  const renderDisabled = isDisabled && tw('opacity-50 cursor-not-allowed');

  return (
    <button
      type="button"
      {..._omit(rest, 'variant', 'color', isDisabled ? 'onClick' : '')}
      className={tw(
        'text-white capitalize inline-block px-6 py-2.5 font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out',
        renderVariant(),
        renderRound,
        renderDisabled,
        className,
      )}
    >
      {children || title}
    </button>
  );
};

Button.displayName = 'Button';
