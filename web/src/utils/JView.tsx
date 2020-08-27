import dynamic from "next/dynamic";
const JsonView = dynamic(() => import("react-json-view"), { ssr: false });

const JView: React.FC<{ collapsed?: boolean; src: any; name: string }> = ({
  src,
  name,
  collapsed,
}) => {
  return <JsonView {...{ collapsed, src, name }} />;
};

export default JView;
