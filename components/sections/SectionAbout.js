import React from 'react'
import Button from '../buttons/Button'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import TitleSection from '../titles/TitleSection'

const SectionAbout = () => {
  return (
    <ContainerCards>
    <ContainerContentsCard>
        <TitleSection text='Acerca de'/>

        <div className="mt-3 text-sm">
            <p className='text-gray-200 text-opacity-95'>👋 Hola, me llamo Tomás Aranda soy desarrollador Front-End y cuento con experiencia como Freelance en tecnologías Full-Stack MERN (MongoDB Express React NodeJS).</p>
            
            <p className='text-gray-200 text-opacity-95 mt-3'>Tengo experiencia en Diseño y Desarrollo de aplicaciones web realizando dos aplicaciones webs de manera {''}
            
            <span className="text-opacity-70 text-gray-200 hover:text-blue-400 cursor-pointer
            
            ">... ver más</span></p>



        </div>
    </ContainerContentsCard>
</ContainerCards>
  )
}

export default SectionAbout