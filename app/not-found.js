import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-screen h-[100dvh] bg-white flex flex-col items-center justify-center'>
            <Image src="/error404.svg" width={200} height={200} alt='Error 404' className='w-full max-w-[600px]' />
            <Link href="/" className='bg-purple-700 p-2 text-white '>Return Home</Link>
        </div>
    )
}