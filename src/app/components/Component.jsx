"use client";
import useStore from "../store/Sharedstate";

const Component = () => {
  const { randomStateValue, setRandomStateValue } = useStore();
  return (
    <div
      onClick={() => setRandomStateValue("Melon")}
      className="bg-teal-500 p-3 rounded-lg"
    >
      Component state: {randomStateValue}
    </div>
  );
};

export default Component;
