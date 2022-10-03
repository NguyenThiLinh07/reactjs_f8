import { useState } from 'react'
const Todolist = () => {
    const [job, setJob] = useState<string>('')
    const [jobs, setJobs] = useState<string[]>([]);

    const handleSubmit = () => {
        setJobs(prev => [...prev, job]);
    }

  return (
    <div>
        <input
            type="text"
            value={job}
            onChange={e => setJob(e.target.value)}
        />
        <button onClick={handleSubmit}>Linh ngu</button>

        <ul>
            {jobs.map((job, index) => (
                <li key={index}>{job}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist