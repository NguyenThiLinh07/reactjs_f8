import React from 'react'
import { useState } from 'react';

interface Courses {
    id: number;
    name: string;
}

const courses:Courses[] = [
    {
        id: 1,
        name: 'HTML, CSS'
    }, {
        id: 2,
        name: 'TypeScript'
    },
    {
        id: 3,
        name: 'JavaScript'
    }, {
        id: 4,
        name: 'ReactJS'
    }
]

const TwoWayVD2 = () => {
    const [checked, setChecked] = useState<number[]>([]);
    console.log(checked);
    const handleCheck = (id:number )=> {
        setChecked(prev => [...prev, id]);
    }

    const handleSubmit = () => {
        console.log({ id: checked });
    }

    return (
        <div>
            {courses.map(course => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={(checked).includes((course.id))}
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
            ))}
            <button onClick={handleSubmit}>Linh ngu</button>
        </div>
  )
}

export default TwoWayVD2;