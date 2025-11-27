import React from 'react';

type IContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<IContainerProps> = ({ children, className }): React.ReactElement => {
  return <div className={`${className} container`}>{children}</div>;
};

export default Container;