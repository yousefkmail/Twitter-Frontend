import { ReactNode } from "react";

interface DefaultPageDesignProps {
  LeftPartition: ReactNode;
  RightPartition: ReactNode;
}
const DefaultPageDesign = ({
  LeftPartition,
  RightPartition,
}: DefaultPageDesignProps) => {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
      <div
        style={{
          flexGrow: 1,
          maxWidth: "600px",
          minHeight: "100vh",
          borderLeft: "1px solid rgba(255,255,255,0.3)",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {LeftPartition}
      </div>
      <div
        style={{
          width: "40%",
          paddingLeft: "20px",
          position: "sticky",
          top: "0",
        }}
      >
        {RightPartition}
      </div>
    </div>
  );
};

export default DefaultPageDesign;
