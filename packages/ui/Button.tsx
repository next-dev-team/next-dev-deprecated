import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type IVariant = 'outline' | 'ghost' | 'disabled' | 'primary';
type IType = 'primary' | 'warning' | 'success' | 'error' | 'dark' | 'light';

export type IButton = {
  /**
   * container clx
   */
  ngClass?: string;
  variant?: IVariant;
  title?: string;
  color?: IType;
} & Omit<ButtonHTMLAttributes<any>, 'color'>;

export const Button = (props: IButton) => {
  const {
    className,
    variant = 'primary',
    title = 'button',
    color = 'primary',
    children,
    ...rest
  } = props;

  /**
   * renderBtnClx base on variant
   */
  const renderVariant = () => {
    //------- primaryColor ----------
    const primaryColor = {
      primary:
        'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 fucus:text-white',
      dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
      success: 'bg-green-500 hover:bg-green-600 focus:ring-green-200',
    } as any;

    //------- outlineColor ----------
    const outlineBase = twMerge(
      'border-2 border-blue-600 text-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out',
    );

    const outlineColor = {
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300',
      primary: outlineBase,
      dark: twMerge(
        outlineBase,
        'border-gray-900 hover:bg-gray-900 text-gray-900',
      ),
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

  return (
    <button
      type="button"
      // {...omit(rest, 'variant', 'color')}
      {...rest}
      className={twMerge(
        'text-white inline-block px-6 py-2.5 font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out',
        renderVariant(),
        className,
      )}
    >
      {children || title}
    </button>
  );
};

Button.displayName = 'Button';
