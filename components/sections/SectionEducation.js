import React from 'react'

import TitleSection from '../titles/TitleSection'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import CardDestacados from '../cards/CardDestacados'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import icons from '../icons/icons'
import ContainerViewMore from '../containers/ContainerViewMore'
import CardEducation from '../cards/CardEducation'

const SectionEducation = () => {
  return (

    
        <ContainerViewMore title="Licencias y certificaciones" textSeeMore="Mostrar todas las licencias y certificaciones (6)">
          
          <div className="mt-5 flex flex-col gap-3">

            <CardEducation
            title = "Diseño Web Profesional El Curso Completo, Práctico y desde 0"
            date = "Expedición: jul. 2022 · Sin fecha de vencimiento"
            name = "Udemy"
            img="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1666828800&v=beta&t=OgHz9cQlg3QjaHbYgm1fQeVMx-EI6MW8TDI6V3Xz5EM"
            />
            <CardEducation
            img="https://media-exp1.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_100_100/0/1519902704390?e=1666828800&v=beta&t=2_x_QZUboK5Jm762wWK0RWZ_KSPaT5fScw41tyBP5Yg"
            date="Expedición: jul. 2022 · Sin fecha de vencimiento"
            title="EF SET English Certificate 51/60 (B2 Upper Intermediate)"
            name="F Standard English Test (EF SET)"
            />
            <CardEducation
            date="Expedición: abr. 2022 · Sin fecha de vencimiento"
            title="JavaScript Moderno Guía Definitiva Construye +15"
            name = "Udemy"
            img="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1666828800&v=beta&t=OgHz9cQlg3QjaHbYgm1fQeVMx-EI6MW8TDI6V3Xz5EM"
            type={true}
            />

        </div>
        

        </ContainerViewMore>

  )
}

export default SectionEducation



