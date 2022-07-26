import React from 'react'
import hiring_img from '../../docs/hiring_img.png'
import ContainerCards from '../containers/ContainerCards'
import Image from 'next/image'


const SectionHiringOnLinkedin = () => {
  return (
    
    <div className="hidden lg:block">
      <ContainerCards>
          <div className="flex justify-center w-full">
              <Image src={hiring_img} className="rounded-xl"
              
              />
          </div>
      </ContainerCards>
    </div>
  )
}

export default SectionHiringOnLinkedin