import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import ts from '../assets/typescript_original_logo_icon_146317.png'
import git from '../assets/github.png'
import redux from '../assets/redux.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:ts,
            title:'TypeScript',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:redux,
            title:'Redux-Toolkit',
            style:'shadow-purple-500'
        },
        {
            id:7,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:8,
            src:git,
            title:'GitHub',
            style:'shadow-gray-500'
        },
    ]

  return (
    <div name='Навыки' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>


       <div className='max-w-screen-lg mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Навыки</p>
                <p className='py-6'>Технологии с которыми я работаю</p>
            </div>   

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0'>
                {
                skills.map(({id,src,title,style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))
                }
            </div>     

       </div>



    </div>
  )
}

export default Experience