import { useState, useEffect } from "react";

function Content() {
  const [timeDown, setTimeDown] = useState(180);

  useEffect(() => {
    const timeCountdonw = setInterval(() => {
      setTimeDown((prevState) => prevState - 1);
      console.log(11)
    }, 1000);

    return () => clearInterval(timeCountdonw);
  }, []);

  return (
    <div className="Content">
      <p>{timeDown}</p>
      <a href="0357660528">callMe</a>
    </div>
  );
}

export default Content;
