import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'


interface Courses {}
function FeaturedCourses() {
  courseData.courses.filter(course => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div className='text-center'>
                <h2 className=''>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with  the Best</p>
        </div>
        <div className='mt-10' >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            test
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