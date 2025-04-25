import React from "react";
import { useParams, Link } from "react-router";
import { MapPinIcon, ArrowLeft } from "lucide-react";

// Hardcoded profiles
import Profile1 from '../../assets/images/Profile1.jpeg';
import Profile2 from '../../assets/images/Profile2.jpg';
import Profile3 from '../../assets/images/Profile3.jpg';
import Profile4 from '../../assets/images/Profile4.jpg';
import Profile5 from '../../assets/images/Profile5.jpg';
import Profile6 from '../../assets/images/Profile6.jpg';

const teachers = [
  {
    id: '1',
    name: 'Matthew Dinko',
    title: 'English Teacher',
    location: 'Lapaz, Accra',
    imageUrl: Profile1,
    profile: 'I am a teacher of English...',
    skills: [
      'Has strong command in English.',
      'Deep understanding of teaching practices.',
      'Create supportive learning environment always.',
      'Excellent inter-relational skills',
      'Mentoring',
    ],
    philosophy: 'I believe every student is unique...'
  },
  {
    id: '2',
    name: 'Kennedy Zongbil',
    title: 'Math/Physics Teacher',
    location: 'Cape Coast',
    imageUrl: Profile2,
    profile: 'Physics enthusiast and math whiz...',
    skills: ['Curriculum planning', 'Mentoring'],
    philosophy: 'Education is about curiosity...'
  },
  {
    id: '3',
    name: 'Joyce Abbey',
    title: 'Literature-in-English Teacher',
    location: 'New Site,Sunyani',
    imageUrl: Profile4,
    profile: 'I have five years of working experience with two years international experience',
    skills: ['Curriculum planning', 'Mentoring'],
    philosophy: 'Teaching is like football.Where the teacher is the coach and the students are the players...'
  },
  {
    id: '4',
    name: 'Daniel Danquah',
    title: 'Pre-School Teacher',
    location: 'Kwadaso,Kumasi',
    imageUrl: Profile3,
    profile: 'Love Kids',
    skills: ['Curriculum planning', 'Mentoring'],
    philosophy: 'Teaching is like football.Where the teacher is the coach and the students are the players...'
  },
  {
    id: '5',
    name: 'Dorcas Gyedu',
    title: 'Integrated Science Teacher',
    location: 'Chapel Square,Kasoa',
    imageUrl: Profile5,
    profile: 'Completed University of Education with first class.',
    skills: ['Curriculum planning', 'Mentoring'],
    philosophy: 'Teaching is like football.Where the teacher is the coach and the students are the players...'
  },
  {
    id: '6',
    name: 'Selina Boafo',
    title: 'Elective Mathematics Teacher',
    location: 'Container,Tamale',
    imageUrl: Profile6,
    profile: 'Completed University of Education with first class.',
    skills: ['Engaging learners at all times', 'Nurturing'],
    philosophy: 'Teaching is like football.Where the teacher is the coach and the students are the players...'
  },
 
  // Add more teacher objects...
];

const SingleProfile = () => {
  const { id } = useParams();
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) return <div className="p-6 text-center text-red-600">Profile not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-gray-800 font-sans">
      <div className="mb-4">
        <Link to="/profiles" className="flex items-center text-[#6D2323] hover:underline">
          <ArrowLeft className="mr-2" /> Back
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-[#B6CBBD] p-6 flex flex-col justify-center items-center text-center">
            <img src={teacher.imageUrl} alt={teacher.name} className="w-35 h-45 rounded-sm object-cover mb-4 border-1 border-[#6D2323]" />
            <h1 className="text-2xl font-bold text-[#6D2323]">{teacher.name}</h1>
            <p className="text-sm text-white">{teacher.title}</p>

            <div className="mt-6 text-sm space-y-2">
              <div className="flex items-center justify-center gap-2">
                <MapPinIcon className="text-[#6D2323]" />
                <span className="text-white">{teacher.location}</span>
              </div>
              <Link
                to="/bookForm"
                className="mt-4 inline-block bg-[#6D2323] text-white px-4 py-2 rounded-sm hover:bg-gray-800 transition-all cursor-pointer"
              >
                Book
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 text-[#6D2323]">
                PROFILE
              </h2>
              <p className="text-sm leading-relaxed">{teacher.profile}</p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#B6CBBD] pb-1 mb-2 text-[#6D2323]">
                KEY SKILLS
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                {teacher.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#B6CBBD] pb-1 mb-2 text-[#6D2323]">
                TEACHING PHILOSOPHY
              </h2>
              <p className="text-sm leading-relaxed">{teacher.philosophy}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
