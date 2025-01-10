"use client"

import React, { useState } from 'react'

const Validator = () => {
const [idNumber, setIdNumber] = useState("");

  return (
    <div className='w-full h-screen container mx-auto'>
        <div className="flex flex-col justify-center items-center mt-24 mx-8 lg:mt-32">
            <div className="flex flex-col gap-6 justify-center items-center tracking-widest">
                <h1 className='text-4xl text-white font-medium md:text-5xl lg:text-7xl text-center leading-tight'>
                    Validate South African ID Numbers
                </h1>
                <h3 className='text-2xl text-accent font-semibold md:text-4xl lg:text-5xl text-center'>
                    Quick, Easy, Secure
                </h3>
            </div>
            <div className="w-full flex flex-col bg-primary rounded-md mx-8 mt-20 md:mt-32 max-w-[700px]">
                <form className="flex flex-col space-y-8 justify-center items-center p-16">
                    <input
                        type="text"
                        placeholder="Enter ID Number"
                        value={idNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          setIdNumber(value);
                        }}
                        className="w-full max-w-[560px] h-[80px] text-center text-white font-bold text-lg bg-secondary p-3 drop-shadow-xl shadow-black focus:ring-2 focus:ring-primary-light focus:outline-none"
                    />
                    <button
                      className="w-full max-w-[300px] h-[80px] rounded-full bg-accent text-white font-bold text-lg p-3 hover:bg-secondary-dark focus:ring-2 focus:ring-primary-light focus:outline-none">
                      VALIDATE
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Validator