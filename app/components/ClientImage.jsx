"use client"

import Image from 'next/image';
export default function ClientImage(props) {
    return <Image
        unoptimized={process.env.NEXT_PUBLIC_UNOPTIMIZE_IMAGES}
        {...props}/>
}