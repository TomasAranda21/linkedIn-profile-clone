import React from 'react'
import Button from '../buttons/Button'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import TitleSection from '../titles/TitleSection'

const SectionActividad = () => {
  return (
      <ContainerCards>
        <ContainerContentsCard>
            <div>
                <div className="flex justify-between items-center">
                    <TitleSection text='Actividad'/>

                    <Button text="+ Seguir"/>

                </div>
                <p className='text-200 opacity-70'> 1.079 seguidores</p>

            </div>


        </ContainerContentsCard>
    </ContainerCards>
  )
}

export default SectionActividad