import React from 'react'
import { personalInfo } from '../data'
function Info() {
  return (
    <>
    {personalInfo.map(({id, title, description}) => {
        return (
            <li className="info__item" key={id}>
            <span className="info__title">{title}</span>
            <span className="info__desc">{description}</span>
           </li>
        )
    })}
    </>
  )

}
export default Info