import React from 'react'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import Image from 'next/image'
import icon_linkedin from '../../docs/icono_linkedin.png'
import CardLearning from '../cards/CardLearning'
import ButtonSeeMore from '../buttons/ButtonSeeMore'





const SectionLearning = () => {
  return (
    <div className="hidden lg:block">

    <ContainerCards>
        <ContainerContentsCard>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                    <Image
                    src={icon_linkedin}
                    alt=""
                    width={16}
                    height={16}
                    />
                    <h3 className=" uppercase font-medium text-sm">learning</h3>

                </div>

                <p>Añade nuevas aptitudes con estos cursos, gratis durante 24 horas</p>


                <div className="flex flex-col gap-5">
                    <CardLearning 
                

                    img="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658795041/linkedin/users/1604991520951_xqo3t3.gif" text="Fundamentos de Inteligencia artificial: Machine Learning"/>
                    <CardLearning 
                    border={true}

                    img="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658795041/linkedin/users/1591696503595_qcge7b.gif" text="JavaScript: TDD y pruebas unitarias esencial"/>
                    <CardLearning 
                    border={true}

                    img="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658795041/linkedin/users/1627912952444_soobts.gif" text="Node.js avanzado"/>


                </div>
            </div>
        </ContainerContentsCard>

            <ButtonSeeMore>
                <p>Ver mis recomendaciones</p>
            </ButtonSeeMore>
    </ContainerCards>

    </div>

  )
}

export default SectionLearning