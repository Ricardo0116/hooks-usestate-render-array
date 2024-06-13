import React from 'react'
import { useState } from 'react'

export const Persons = () => {
  const [ Persons, setPersons ] = useState(
    {
      id: 1,
      name: "Pacheco",
      role: "Fronted Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
      id: 2,
      name: "Pedro",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
      id: 3,
      name: "Rosario",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
      id: 4,
      name: "Matilda",
      role: "Tester",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
  );

  return (
    <div>Persons</div>
  )
}
