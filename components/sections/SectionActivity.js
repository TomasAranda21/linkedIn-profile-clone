import React from 'react'
import Button from '../buttons/Button'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import CardActivity from '../cards/CardActivity'
import CardProyects from '../cards/CardProyects'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import icons from '../icons/icons'
import { activity } from '../objJson/ObjJson'
import TitleSection from '../titles/TitleSection'
import ContainerViewMore from '../containers/ContainerViewMore'

const SectionActivity = () => {
  return (
    <ContainerViewMore textSeeMore="Mostrar toda la actividad">

            <div>
                <div className="flex justify-between items-center">
                    <TitleSection text='Actividad'/>

                    <Button text="Seguir" icon={icons.plusIcon}/>

                </div>
                <p className='text-200 opacity-70'> 1.079 seguidores</p>

            </div>

            <div>

              {activity.map(act => (

                <div key={act.id}>

                  <CardActivity 
                  img={act.img}
                  title ={act.title}
                  text ={act.text}
                  comments={act.comments}
                  likes={act.likes}
                  date={act.date}
                  author={act.author}
                  border={act.border}
                  />

                </div>

              ))}
              
            </div>

    </ContainerViewMore>
  )
}

export default SectionActivity