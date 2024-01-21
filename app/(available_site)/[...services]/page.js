'use client'
 
import { useParams } from 'next/navigation'
const Page = () => {
  const params = useParams();
  return (
    <div className='w-full text-center capitalize'>
      <h1>{params.about}</h1>
    </div>
  )
}

export default Page