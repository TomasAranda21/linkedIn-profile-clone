import React from 'react'
import Head from 'next/head'


const ContainerMain = ({children}) => {
    return (

        <div>
    
          <Head>
            <title>My linkedIn profile</title>
            <link rel="icon" href='/favicon.png'/>
            
          
          </Head>
    
    
            {children} 
    
        </div>
      )
    }

export default ContainerMain