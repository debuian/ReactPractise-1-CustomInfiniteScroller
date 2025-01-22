import { ReactNode, useEffect, useState } from "react";

type CustomScrollerProps = {
  PropContent: ReactNode[];
};
const CustomScroller = ({ PropContent }: CustomScrollerProps) => {
  const [contents, setContents] = useState(PropContent);
  const [data_animated, setData_Animated] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setData_Animated(true);
      setContents([...contents, ...contents]);
    }
  }, []);
  return (
    <>
      <div
        className={`scroller max-w-[600px] ${
          data_animated ? "overflow-hidden mask-gradient" : ""
        }`}
      >
        <div
          className={`scroller__inner flex flex-wrap gap-4 py-4 ${
            data_animated ? "flex-nowrap animate-scroll w-max" : ""
          }`}
        >
          {contents.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomScroller;
