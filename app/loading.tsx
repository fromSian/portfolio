import LoadingIcon from "@/components/icons/loading-icon";

const Loading = () => {
  return (
    <div
      className="absolute animate-spin"
      style={{
        top: "calc(50% - 32px)",
        left: "calc(50% - 32px)",
      }}
    >
      <LoadingIcon />
    </div>
  );
};

export default Loading;
