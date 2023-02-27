import React, {useState} from 'react'

export const FirstComponent = () => {
    // let name = "Frank";
    let web = "frank.com";

    const [name, setName] = useState('Frank');

    let courses = [
        "Master in php",
        "Master in Javascript",
        "Master in React",
    ]

    const changeName = (newName) => {
        setName(newName);
    }

  return (
    <div>
        <h1>FirstComponent</h1>
        <p>My name is: 
            <strong className={name.length >= 4 ? 'verde' : 'rojo'}> {name} </strong>
        </p>
        <p>My web is: {web}</p>

        <input type="text" onChange={e => changeName(e.target.value)} placeholder="Change Name"></input>

        <button onClick={ e=> changeName("Name for testing")}>
            Change Name
        </button>

        <h2>Courses:</h2>
        <ul>
            {
                courses.map( (course, index) => {
                    return (<li key={index}>
                        {course}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
