import { FC } from "react";
import "./Layout.css";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main className="layout-main">{children}</main>
    </div>
  );
};
