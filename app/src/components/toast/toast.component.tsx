import { ToastContainer } from './toast.styles';

interface ToastProps extends React.HtmlHTMLAttributes<HTMLElement> {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  text: string,
}

export default function Toast({ Icon, text, ...otherProps }: ToastProps) {
  return (
    <ToastContainer {...otherProps}>
      {
        Icon
          ? <Icon />
          : null
      }

      <h2>{text}</h2>
    </ToastContainer>
  );
}