import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseDetails = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 md:p-10'>
      <Card className="max-w-7xl rounded-md mx-auto bg-white shadow-md pt-5 mt-14">
        {/* Header Section */}
        <div className='px-4 py-1'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Button size="icon" variant="outline" className="rounded-full" onClick={()=>navigate('/')}>
                        <ArrowLeft size={16}/>
                    </Button>
                    <h1 className='md:text-2xl font-bold text-gray-800'>Mongo</h1>
                </div>
                <div className='flex space-x-4'>
                    <Button className="bg-blue-500 hover:bg-blue-600">Enroll Now</Button>
                </div>
            </div>
        </div>
        {/* Course overview section */}
        
      </Card>
    </div>
  )
}

export default CourseDetails
