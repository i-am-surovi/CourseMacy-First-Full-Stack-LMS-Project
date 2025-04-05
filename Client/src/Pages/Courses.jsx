import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { setCourse } from "@/redux/courseSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const coursesJson = 
  [
    {
      id: 1,
      title: "Introduction to Python Programming",
      description:
        "Learn the fundamentals of Python programming, including variables, data types, loops, and functions. Ideal for beginners.",
      image: "https://example.com/images/python-course.jpg",
    },
    {
      id: 2,
      title: "Web Development with HTML, CSS, and JavaScript",
      description:
        "Master the art of web development by learning how to create websites using HTML, CSS, and JavaScript. Perfect for anyone looking to get started with front-end development.",
      image: "https://example.com/images/web-development.jpg",
    },
    {
      id: 3,
      title: "Data Science with R",
      description:
        "Dive into data science using R. This course covers statistical analysis, data visualization, and machine learning techniques.",
      image: "https://example.com/images/data-science-r.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing Strategies",
      description:
        "Learn digital marketing strategies and tools to grow your online business. Topics include SEO, social media marketing, and email marketing.",
      image: "https://example.com/images/digital-marketing.jpg",
    },
    {
      id: 5,
      title: "Graphic Design Fundamentals",
      description:
        "Explore the basics of graphic design, including typography, color theory, and composition. This course is perfect for beginners in the field of design.",
      image: "https://example.com/images/graphic-design.jpg",
    },
    {
      id: 6,
      title: "Introduction to Artificial Intelligence",
      description:
        "Gain an understanding of the basics of AI, machine learning, and neural networks. Ideal for those starting in the AI field.",
      image: "https://example.com/images/ai-course.jpg",
    },
    {
      id: 7,
      title: "Business Management Essentials",
      description:
        "This course covers essential business management skills such as leadership, project management, and decision-making.",
      image: "https://example.com/images/business-management.jpg",
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      description:
        "Learn about the key concepts of cybersecurity, including encryption, threat detection, and secure network protocols.",
      image: "https://example.com/images/cybersecurity.jpg",
    },
    {
      id: 9,
      title: "Cloud Computing Basics",
      description:
        "Learn the fundamentals of cloud computing, including cloud services, platforms, and deployment models. Explore how cloud technology is transforming business operations.",
      image: "https://example.com/images/cloud-computing.jpg",
    },
    {
      id: 10,
      title: "Mobile App Development with React Native",
      description:
        "Learn how to develop cross-platform mobile applications using React Native. This course covers the basics of building apps for both iOS and Android.",
      image: "https://example.com/images/react-native.jpg",
    },
    {
      id: 11,
      title: "Advanced SQL and Database Management",
      description:
        "Dive deep into SQL and database management systems. This course covers complex queries, optimization techniques, and database design.",
      image: "https://example.com/images/sql-database.jpg",
    },
    {
      id: 12,
      title: "Machine Learning with Python",
      description:
        "Explore machine learning concepts and algorithms using Python. Learn how to build predictive models and understand how data science and AI intersect.",
      image: "https://example.com/images/machine-learning-python.jpg",
    },
  ]

const Courses = () => {
  const dispatch = useDispatch()
  const {course} = useSelector(store => store.course)
  useEffect(()=>{
    const getAllPublishedCourse = async ()=> {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/course/published-courses`, {withCredentials:true})
        if(res.data.success){
          dispatch(setCourse(res.data.courses))
        }
      } catch (error) {
          console.log(error);
      }
    }
    getAllPublishedCourse()
  })
  return (
    <div className="bg-gray-100 pt-14">
      <div className="min-h-screen max-w-7xl mx-auto py-10">
        <div className="px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Courses
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Explore our curated courses to boost your skills and career. Whether
            you're a beginner or an expert, we have something for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course?.map((course) => {
              return <CourseCard course={course} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
