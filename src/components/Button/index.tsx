import s from './styles.module.scss';

type ButtonColor = 'black' | 'white' | 'grey';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  color?: ButtonColor;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const { children, type, className, disabled, color = 'white', onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${s.button}
        ${color ? s[color] : null}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
