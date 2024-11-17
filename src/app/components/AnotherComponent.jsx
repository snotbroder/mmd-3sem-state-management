"use client";
import useStore from "../store/Sharedstate";
const AnotherComponent = () => {
  const { randomStateValue, setRandomStateValue } = useStore();
  return (
    <div className="bg-teal-500 p-3 rounded-lg">
      AnotherComponent state: {randomStateValue}
    </div>
  );
};

export default AnotherComponent;
