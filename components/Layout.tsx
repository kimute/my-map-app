import { ReactNode } from "react";

type Reactnode = {
  children?: ReactNode;
};

export default function Layout({ children }: Reactnode) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
