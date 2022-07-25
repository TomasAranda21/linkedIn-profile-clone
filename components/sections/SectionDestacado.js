import React from 'react'
import TitleSection from '../titles/TitleSection'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import CardDestacados from '../cards/CardDestacados'

const SectionDestacado = () => {
  return (
    <ContainerCards>
        <ContainerContentsCard>

            <TitleSection text='Detacado'/>

            <div className='flex gap-3 mt-3'>
              <CardDestacados/>
              <CardDestacados/>
              <CardDestacados/>

            </div>

            

        </ContainerContentsCard>
    </ContainerCards>
  )
}

export default SectionDestacado