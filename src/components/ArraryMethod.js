import React from 'react'

const ArraryMethod = () => {
    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Carol', age: 35 },
      ];
    return (
    <ul>
    {users.map((item) =>  <li key={item.name}>The Name is {item.name} and Age is {item.age}</li>)}
    </ul>
  )
}

export default ArraryMethod
