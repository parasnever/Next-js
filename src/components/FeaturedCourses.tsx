'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'


interface Courses {
  
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor:string,
  isFeatured: boolean,
 
}
function FeaturedCourses() {
  const feturedCourses = courseData.courses.filter((course:Courses) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div className='text-center'>
                <h2 className=''>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with  the Best</p>
        </div>
        <div className='mt-10' >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {feturedCourses.map((course:Courses)=>(
              <div key={course.id} className="flex justify-center">
               <BackgroundGradient className='flex flex-col  rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-sm:'>
                  <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                    <p className='text-lg sm:text-xl text-black mt-4 mb-4 dark:text-neutral-200'>{course.title}</p>
                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                    <Link href={`/courses/${course.slug}`}> 
                    Learn More</Link>
                  </div>
               </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20 text-center'>
                <Link  href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' >
                    View All Courses
                </Link>
        </div>
        
    </div>
  )
}

export default FeaturedCourses