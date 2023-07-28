import { LayoutMainContainer } from './layout-main.styles';

export default function LayoutMain({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMainContainer>
      { children }
    </LayoutMainContainer>
  );
}