interface ErrorProps {
  content: string | undefined;
}
const Error = ({ content }: ErrorProps) => {
  return (
    <div style={{ color: "red", fontSize: "12px", height: "20px" }}>
      {content}
    </div>
  );
};

export default Error;
