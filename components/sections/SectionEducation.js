import React from 'react'

import TitleSection from '../titles/TitleSection'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import CardDestacados from '../cards/CardDestacados'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import icons from '../icons/icons'
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



