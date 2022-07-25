import React from 'react'
import icons  from "../icons/icons"
import Button from '../buttons/Button'
import CardProfileViewed from '../cards/CardProfileViewed'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import TitleSection from '../titles/TitleSection'
import ButtonSeeMore from '../buttons/ButtonSeeMore'

const SectionOtherProfileViewed = () => {
  return (

    <ContainerCards>
        <ContainerContentsCard>


                <TitleSection text="Otros perfiles vistos"/>

                
                <div className="flex flex-col gap-5 pt-5">

                    <CardProfileViewed/>
                    <CardProfileViewed/>
                    <CardProfileViewed/>
                    <CardProfileViewed/>
                    <CardProfileViewed/>

                </div>



            
        </ContainerContentsCard>
            <ButtonSeeMore>
                <p>Mostrar más</p>
                <p className="text-2xl">{icons.arrowDownIcon}</p>
            </ButtonSeeMore>
        
    </ContainerCards>
    
  )
}

export default SectionOtherProfileViewed