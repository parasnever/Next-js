
"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams"
function MusicSchoolContactUs() {

  const [email, setEmail] = useState('')
  const [message,setMessage] = useState(""
  const handleSubmit = (event:)
  )
  return (
   <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
    <BackgroundBeams className=" absolute top-0 left-0 w-full h-full z-0"/>
    <div>
      <h1 className=" text-lg md:text-7xl text-center font-sans font-bold  mb-8 text-white">Contact Us</h1>
      <p className=" text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>

      <form onSubmit={handleSubmit}>
        <input type="email" 
               value={email}
               onChange={(e)=> setEmail(e.target.value)
               }
               placeholder="Your email address"
               className=" rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 required: "
                />
        <textarea name="" id=""></textarea>
        <button></button>
      </form>
    </div>
   </div>
  )
}

export default MusicSchoolContactUs