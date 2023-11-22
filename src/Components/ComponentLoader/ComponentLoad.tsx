import { ReactNode } from "react";
import { Audio } from "react-loader-spinner";
interface ComponentLoaderProps {
  Component: ReactNode;
  Condition: boolean;
}

const ComponentLoader = ({ Component, Condition }: ComponentLoaderProps) => {
  return (
    <div>
      {Condition === false ? (
        <Audio
          height={100}
          width={100}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      ) : (
        Component
      )}
    </div>
  );
};

export default ComponentLoader;
