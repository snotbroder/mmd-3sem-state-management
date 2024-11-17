"use client";
import useStore from "../store/globalstate";

const YetAnotherComponent = () => {
  const { globalstate, setGlobalState } = useStore();
  return (
    <div onClick={() => setGlobalState()} className="border">
      YetAnotherComponent state: {globalstate}
    </div>
  );
};

export default YetAnotherComponent;
