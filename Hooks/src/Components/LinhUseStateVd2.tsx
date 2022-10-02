import { useState } from "react";

function LinhUseStateVd2() {
  interface IInfo{
    [name:string]:string|number|boolean;

  }
  const [infor, setInfor] = useState<Partial<IInfo>>({
    name: "Linh xinh gái",
    age: 21,
    address: "Phú Xuyên, Hà Nội",
  });

  const handleUpdate = () => {
    setInfor({ ...infor, bio: "123" });
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default LinhUseStateVd2;
