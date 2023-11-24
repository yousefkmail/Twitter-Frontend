import { FunctionComponent, ReactNode } from "react";
import { TailSpin } from "react-loader-spinner";
interface ComponentLoaderProps {
  Component: ReactNode;
  Condition: boolean;
  Loader?: FunctionComponent;
}

const ComponentLoader = ({
  Component,
  Condition,
  Loader,
}: ComponentLoaderProps) => {
  return (
    <div>
      {Condition === false ? (
        Loader ? (
          <Loader />
        ) : (
          <TailSpin
            height={100}
            width={100}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        )
      ) : (
        Component
      )}
    </div>
  );
};

export default ComponentLoader;
