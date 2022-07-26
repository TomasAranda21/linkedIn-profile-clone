import React from 'react'
import CardProyects from '../cards/CardProyects'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import { proyects } from '../objJson/ObjJson'
import TitleSection from '../titles/TitleSection'

const SectionProyects = () => {
  return (
    <ContainerCards>
    <ContainerContentsCard>
        <TitleSection text="Proyectos"/>

        <div className="mt-2 flex flex-col gap-4">
          {proyects.map(proy => (
            <div key={proy.id}>

              <CardProyects
              title={proy.title}
              date={proy.date}
              text={proy.text}
              border={proy.border}
              />

            </div>

          ))}
        </div>



        
    </ContainerContentsCard>
</ContainerCards>
  )
}

export default SectionProyects