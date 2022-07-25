import React from 'react'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import icons from '../icons/icons'
import TitleSection from '../titles/TitleSection'
import ContainerCards from './ContainerCards'
import ContainerContentsCard from './ContainerContentsCard'

const ContainerViewMore = ({title, textSeeMore, children}) => {
  return (
    
    <ContainerCards>
        <ContainerContentsCard>
            <TitleSection text={title}/>

            {children}


            
        </ContainerContentsCard>
            <ButtonSeeMore>
                <p>{textSeeMore}</p>
                <p className="text-2xl">{icons.arrowRightIcon}</p>
            </ButtonSeeMore>
    </ContainerCards>
  )
}

export default ContainerViewMore