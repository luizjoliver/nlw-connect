import Image from 'next/image'
import React from 'react'

import goldMedal from '../../assets/medal-gold.svg'
import silverMedal from '../../assets/medal-silver.svg'
import cooperMedal from '../../assets/medal-cooper.svg'

export default function Ranking() {
  return (
    <div className="w-full  max-w-[440px] space-y-4 ">
    <h2 className="text-gray-200 font-heading font-semibold leading-none">
      Ranking de classificações
    </h2>
    <div className="space-y-4 ">
      <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3  relative">
        <span className="text-sm text-gray-300 leading-none">
        <span className='font-semibold'>1°</span>|
          Luiz fellipe
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200">
          1320
        </span>

        <Image
          src={goldMedal}
          alt="gold-medal"
          className="absolute top-0 right-8"
        />
      </div>
      <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
        <span className="text-sm text-gray-300 leading-none">
            <span className='font-semibold'>2°</span>|
         João espindola
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200">
          1320
        </span>

        <Image
          src={silverMedal}
          alt="gold-medal"
          className="absolute top-0 right-8"
        />
      </div>
      <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
        <span className="text-sm text-gray-300 leading-none">
        <span className='font-semibold'>3°</span>|
         Diego fernandes
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200">
          1320
        </span>

        <Image
          src={cooperMedal}
          alt="gold-medal"
          className="absolute top-0 right-8"
        />
      </div>
    </div>
  </div>
  )
}
