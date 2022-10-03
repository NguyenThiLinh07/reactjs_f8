import React from "react";
import { useState } from "react";

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

const TwoWayVD1 = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checked, setChecked] = useState<number>(2);
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

export default TwoWayVD1;
