import React from 'react'
import hiring_img from '../../docs/hiring_img.png'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import Image from 'next/image'


const SectionHiringOnLinkedin = () => {
  return (
    
    <ContainerCards>
        <div className="flex justify-center w-full">
            <Image src={hiring_img}
            
            />

        </div>

    </ContainerCards>
  )
}

export default SectionHiringOnLinkedin