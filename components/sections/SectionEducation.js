import React from 'react'
import ContainerViewMore from '../containers/ContainerViewMore'
import CardEducation from '../cards/CardEducation'
import { education } from '../objJson/ObjJson'

const SectionEducation = () => {
  return (

    
        <ContainerViewMore title="Licencias y certificaciones" textSeeMore="Mostrar todas las licencias y certificaciones (6)">
          
          <div className="mt-5 flex flex-col gap-8">

            {education.map(ed => (
              <div key={ed.id}>
                <CardEducation
  
                title = {ed.text}
                date = {ed.date}
                name = {ed.name}
                img={ed.img}
                type={true}
                border = {ed.border}

                />
              </div>

            ))}


        </div>
        

        </ContainerViewMore>

  )
}

export default SectionEducation



