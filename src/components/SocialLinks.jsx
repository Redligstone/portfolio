import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links =[
        {
            id:1,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Redligstone',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Почта <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:glebmarenin20@gmail.com',
        },
        {
            id:3,
            child:(
                <>
                Резюме <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'https://drive.google.com/file/d/1qcRN1NxLx4_oCujEUo8m974muTbFPkQ_/view?usp=share_link',
            style:'rounded-br-md',
            download:true
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({id,child,href,style,download}) =>(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]' + ' ' + style}>
            <a className='flex justify-between items-center w-full text-white' href={href} download={download} target='_blank' rel='noreferrer'>
                <>
                
                {child}
                </>
            </a>
        </li> 
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks