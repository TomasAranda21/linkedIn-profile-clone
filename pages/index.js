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

export default function Home() {
      return (

        <>
          <Header/>
          <div className='bg-black  pt-6'>
            <main className='2xl:w-3/5 lg:w-5/6 md:w-11/12 mx-auto text-gray-200 mt-10 md:mt-14'>
              <div className='md:grid md:grid-cols-3 gap-6'>

                <div className='col-span-2'>
                  <SectionPrincipal/>
                  {/* <SectionDestacado/> */}
                  <SectionActividad/>
                  <SectionAbout/>
                  <SectionExperience/>

                  <SectionEducation/>
                  <SectionSkills/>
                  <SectionProyects/>
                  <SectionInterests/>
                </div>

                <div className=' md:w-11/12' >
                  <div className='hidden md:visible'>
                    <SectionHiringOnLinkedin/>
                    <SectionOtherProfileViewed/>

                  </div>
                  <SectionOtherProfileViewed/>
                </div>

              </div>

            </main>


            <Footer/>
          </div>
        
        </>
      )
}
