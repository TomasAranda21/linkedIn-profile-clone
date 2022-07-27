import React from 'react'
import icons  from "../icons/icons"
import Button from '../buttons/Button'
import CardProfileViewed from '../cards/CardProfileViewed'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import TitleSection from '../titles/TitleSection'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import { users } from '../objJson/ObjJson'

const SectionOtherProfileViewed = () => {
  return (

    <ContainerCards bgBlue={true}>
        <ContainerContentsCard>

            <h2 className="font-semibold">Otros perfiles vistos</h2>

            
            <div className="flex flex-col gap-8 lg:gap-3 pt-5">

              {users.map(user => (
                <div key={user.id}>
                  <CardProfileViewed
                  name={user.name}
                  description={user.description}
                  img={user.img}
                  type={user.type}

                  />

                </div>

              ))}
                
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