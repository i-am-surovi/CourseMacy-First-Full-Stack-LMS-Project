import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateCourse = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)  
  const [courseTitle, setCourseTitle] = useState("")  
  const [category, setCategory] = useState("")
  
  const getSelectedCategory = (value)=> {
    setCategory(value)
  }
  const CreateCourseHandler = async ()=> {
    try {
        setLoading(true)
        const res = await axios.post('http://localhost:8000/api/v1/course/', {courseTitle, category}, {
            headers: {
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        if(res.data.success){
            navigate('/admin/course')
            toast.success(res.data.message)
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false)
    }
  }
  return (
    <div className="p-10 md:pr-20 h-screen">
      <h1 className="text-2xl font-bold">
        Lets Add <span className="text-blue-500">Courses</span>
      </h1>
      <p>
        Ready to share your expertise and generate revenue? Click 'Let's Add
        Course' to launch a new, profitable course, design engaging content, and
        connect with eager learners. Start teaching and earning today!
      </p>
      <div className="mt-10">
        <div>
          <Label className="mb-2">Title</Label>
          <Input
            type="text"
            value={courseTitle}
            onChange={(e)=>setCourseTitle(e.target.value)}
            placeholder="Your Course Name"
            className="bg-white"
          />
        </div>
        <div className="mt-4 mb-5">
          <Label className="mb-4">Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="MernStack Development">
                  MernStack Development
                </SelectItem>
                <SelectItem value="Frontend Development">
                  Frontend Development
                </SelectItem>
                <SelectItem value="Backend Development">
                  Backend Development
                </SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="PHP">PHP</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="C++">C++</SelectItem>
                <SelectItem value="MongoDBe">MongoDB</SelectItem>
                <SelectItem value="SQL">SQL</SelectItem>
                <SelectItem value="Java">Java</SelectItem>
                <SelectItem value="Wordpress">Wordpress</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button onClick={()=>navigate('/admin/course')} variant="outline">Cancel</Button>
          <Button className="bg-blue-500 hover:bg-blue-600" disabled={loading} onClick={CreateCourseHandler}>
            {
                loading ? <><Loader2 className="animate-spin mr-1 h-4 w-4"/>Please wait</> : "Create"
            }
          </Button>
        </div>
      </div>
    </div>
  ); 
};

export default CreateCourse;
