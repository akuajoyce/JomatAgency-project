import React from 'react'
import ProfileCard from '../../assets/components/ProfileCard'
import Navbar from '../../assets/components/Navbar'
import Profile1 from '../../assets/images/Profile1.jpeg'
import Profile2 from '../../assets/images/Profile2.jpg'
import Profile3 from '../../assets/images/Profile3.jpg'
import Profile4 from '../../assets/images/Profile4.jpg'
import Profile5 from '../../assets/images/Profile5.jpg'
import Profile6 from '../../assets/images/Profile6.jpg'


const teachersProfile =[
    {
        name: 'Matthew Dinko',
        title: 'English Language Teacher',
        location: 'Lapaz,Accra',
        imageUrl: Profile1
    },
    {
        name: 'Kennedy Zongbil',
        title: 'Mathematics/Physics Teacher',
        location: 'Cape Coast',
        imageUrl: Profile2 
    },
    {
        name: 'Joyce Abbey',
        title: 'Literature-in-English Teacher',
        location: 'New Site,Sunyani',
        imageUrl: Profile4
    },
    {
        name: 'Daniel Danquah',
        title: 'Pre-School Teacher',
        location: 'Kwadaso,Kumasi',
        imageUrl: Profile3
          
    },
    {
        name: 'Dorcas Gyedu',
        title: 'Integrated Science Teacher',
        location: 'Chapel Square,Kasoa',
        imageUrl: Profile5 
    },
    {
        name: 'Selina Boafo',
        title: 'Elective Mathematics Teacher',
        location: 'Container,Tamale',
        imageUrl: Profile6 
    },
]
const Profiles = () => {
  return (
    <div className='min-h-screen bg-[#B6CBBD]'>
        <Navbar />
        {teachersProfile.map((teacher, index) => (
         <ProfileCard
         key={index}
         name={teacher.name} 
         title={teacher.title}
         location={teacher.location}
         imageUrl={teacher.imageUrl}

         />
        ))}
          
        
       
        <div >

        </div>
    </div>
  )
}

export default Profiles