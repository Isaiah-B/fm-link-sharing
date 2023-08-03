import { ToastContainer } from './toast.styles';

interface ToastProps {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  text: string,
}

export default function Toast({ Icon, text }: ToastProps) {
  return (
    <ToastContainer>
      {
        Icon
          ? <Icon />
          : null
      }

      <h2>{text}</h2>
    </ToastContainer>
  );
}