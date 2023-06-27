"use client"
import { useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Image from 'next/image'
import restaurant from '@images/restaurante.jpg'

export default function LocalizationCarousel () {

    const [changeImage, setChangeImage] = useState(0)

    const images = [
        {
            image: restaurant,
            adress: 'Rua dos salmões, 321, SC - Brasil'
    },
        {
            image: restaurant,
            adress: 'Rua dos salmões, 123, SC - Brasil'
    }
]

    const changeNextImage = () => {
        changeImage === images.length - 1 ? setChangeImage(0) : setChangeImage(changeImage + 1)
    }

    const changePreviousImage = () => {
        changeImage === 0 ? setChangeImage(images.length - 1) : setChangeImage(changeImage - 1)
    }

    return (
        <section>
            <div className='text-center lg:mt-32 mt-20 mb-14 mx-5 lg:mx-0'>
                <h2 className='lg:text-4xl text-2xl uppercase font-bold p-4'>Nossas Localizações</h2>
                <p className='text-gray-400 text-xs'>Venha conhecer nossos restaurantes, abaixo estão os endereços das nossas unidades!</p>
            </div>
            <div className='flex justify-center items-center gap-5 lg:gap-0 lg:relative'>
                <div onClick={changePreviousImage} className='lg:w-16 w-5 lg:h-16 h-5 border border-black border-solid bg-white 
                flex justify-center items-center lg:mr-20 hover:scale-95 hover:cursor-pointer duration-300'>
                    <GrPrevious />
                </div>
                <div className='lg:relative'>
                    <Image src={images[changeImage].image} alt="restaurant location" className='lg:w-[500px] w-56'/>
                    <p className='w-auto max-w-[300] lg:px-5 lg:py-5 bg-white z-50 lg:absolute lg:bottom-10 lg:left-14 text-xs lg:text-base'>{images[changeImage].adress}</p>
                </div>
                <div onClick={changeNextImage} className='lg:w-16 w-5 lg:h-16 h-5 border border-black border-solid bg-white 
                flex justify-center items-center lg:ml-20 hover:scale-95 hover:cursor-pointer duration-300'>
                    <GrNext />
                </div>
            </div>
        </section>
    )
}