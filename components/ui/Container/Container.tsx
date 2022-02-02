import React, { FC, ReactNode, ComponentType, HTMLAttributes } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: El = "div" }) => {
  return <El className="px-6 mx-auto max-w-8xl">{children}</El>;
};

export default Container;
