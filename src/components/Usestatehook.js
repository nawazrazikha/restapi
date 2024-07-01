import { useState } from "react";

function Usestatehook() {
  const [count, setCount] = useState({
    num: 1,
    id: "a",
  });

  const handleadd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
    console.log(count);
  };

  const handlesubtract = () => {
    
    setCount((prev) => {
        return {
          ...prev,
          num: prev.num - 1,
        };
      });
  };

  return (
    <div>
      <button onClick={handlesubtract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleadd}>+</button>
    </div>
  );
}
export default Usestatehook;
