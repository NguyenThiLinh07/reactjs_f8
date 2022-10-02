import React from "react";
import { useState } from "react";

const TwoWay = () => {
  interface Courses {
    id: number;
    name: string;
  }

  const courses: Courses[] = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Typescript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(0);
  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };
  console.log(checked);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {courses.map((course) => (
        <div key={course.id}>
          <input 
            type="radio" 
            checked={checked === course.id}
            onChange={() => setChecked(course.id)} />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default TwoWay;
