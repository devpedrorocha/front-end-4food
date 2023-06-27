import ilustração from '@images/pexels-elif-tekkaya-5616153.jpg'
import restaurante from '@images/restaurante.jpg'
import Image from 'next/image'

export function OurHistory () {
    return (
        <div className='flex flex-col-reverse lg:flex-row lg:mx-24 mx-8 lg:mt-32 lg:pb-32 border-b border-gray-300'>
            <div className='flex lg:flex-col flex-row justify-center lg:items-center gap-3 lg:w-2/5 lg:relative mt-5 lg:mt-0'>
                <Image src={restaurante} alt='Imagem ilustrativa Restaurante' className='lg:absolute lg:top-0 lg:w-80 w-36'/>
                <Image src={ilustração} alt='Imagem ilustrativa pessoas comendo' className='lg:absolute lg:top-[335px] lg:right-5 lg:w-80 w-36'/>
            </div>
            <div className='lg:w-3/5 lg:pl-8'>
                <h2 className='lg:text-4xl text-2xl uppercase font-bold pb-8'>Nossa História</h2>
                <div className='lg:max-w-2xl'>
                    <p className='leading-7 text-base text-gray-400 indent-6'>
                    Em 2015, quatro jovens empreendedores com uma paixão compartilhada pela culinária japonesa decidiram 
                    transformar seu sonho em realidade. Assim nasceu o 4Food, um restaurante que trazia consigo a promessa 
                    de oferecer uma experiência única e autêntica aos amantes da gastronomia japonesa.
                    </p>
                    <p className='leading-7 text-base text-gray-400 indent-6'>
                    Ao longo dos anos, o 4Food cresceu e se tornou um destino popular para os amantes de sushi e culinária 
                    japonesa. A dedicação dos quatro fundadores, juntamente com a equipe talentosa que se juntou a eles, 
                    resultou em pratos excepcionais que encantam os clientes e contam a história da paixão e do compromisso 
                    por trás de cada mordida.
                    </p>
                    <p className='leading-7 text-base text-gray-400 indent-6'>
                    Hoje, o 4Food continua a ser um lugar onde a tradição se encontra com a inovação, onde os sabores 
                    autênticos da culinária japonesa são celebrados em um ambiente acolhedor. A história desse restaurante 
                    único continua a ser escrita, sempre com a mesma paixão e dedicação que o tornaram um sucesso desde o 
                    primeiro dia.
                    </p>
                </div>
            </div>
        </div>
    )
}