import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
<div className="relative h-screen w-full">
      <Image
        src="/images/background.webp"
        alt="Background Image"
        fill
        loading="lazy"
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}

export default Background