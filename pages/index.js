import Head from 'next/head'
import Image from 'next/image'
import SectionPrincipal from '../components/sections/SectionPrincipal'
import SectionDestacado from '../components/sections/SectionDestacado'
import Header from '../components/header/Header'
import SectionActividad from '../components/sections/SectionActividad'
import SectionAbout from '../components/sections/SectionAbout'
import SectionExperience from '../components/sections/SectionExperience'
import SectionOtherProfileViewed from '../components/sections/SectionOtherProfileViewed'
import Footer from '../components/footer/Footer'
import SectionEducation from '../components/sections/SectionEducation'
import SectionSkills from '../components/sections/SectionSkills'
import SectionInterests from '../components/sections/SectionInterests'
import SectionProyects from '../components/sections/SectionProyects'
import SectionHiringOnLinkedin from '../components/sections/SectionHiringOnLinkedin'
import CardChat from '../components/cards/CardChat'
import SectionPeopleCouldMeet from '../components/sections/SectionPeopleCouldMeet'
import SectionLearning from '../components/sections/SectionLearning'
import HeaderMovile from '../components/header/HeaderMovile'

export default function Home() {
 
      return (

        <>
          <Header/>
          <HeaderMovile/>
          <div className='bg-black pt-5 '>
            <main className='2xl:w-3/5   lg:w-full p-0 lg:p-2 xl:w-5/6 md:w-11/12 mx-auto text-gray-200 mt-6 md:mt-10 lg:mt-14'>

              
              <div className='flex lg:gap-6 lg:flex-row flex-col lg:justify-center'>

                <div className='col-span-2'>
                  <SectionPrincipal/>
                  <SectionDestacado/>
                  <SectionActividad/>
                  <SectionAbout/>
                  <SectionExperience/>

                  <SectionEducation/>
                  <SectionSkills/>
                  <SectionProyects/>
                  <SectionInterests/>
                </div>

                <div className=' ' >
                  <div className=''>
                    <SectionHiringOnLinkedin/>
                    <SectionOtherProfileViewed/>

                  </div>
                  <SectionPeopleCouldMeet/>
                  <SectionLearning/>
                </div>
                
              </div>

            </main>


            <Footer/>
          </div>

          <CardChat/>
        
        </>
      )
}
