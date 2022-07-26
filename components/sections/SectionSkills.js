import React from 'react'
import Cardskills from '../cards/Cardskills'
import ContainerViewMore from '../containers/ContainerViewMore'


const SectionSkills = () => {
  return (

    <ContainerViewMore title="Conocimientos y aptitudes" textSeeMore="Mostrar todas las aptitudes (18)">
        
      <div className="flex flex-col gap-3 mt-5">
        
        <Cardskills title="HTML5"/>
        <Cardskills displayButton={true} isNotValidated={true} title="React.js"/>
        <Cardskills type={true} title="JavaScript"/>

   
      </div>

    </ContainerViewMore>

  )
}

export default SectionSkills