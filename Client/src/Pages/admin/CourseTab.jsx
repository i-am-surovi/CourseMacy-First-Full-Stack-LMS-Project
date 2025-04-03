import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseTab = () => {
  const navigate = useNavigate()
  return (
    <Card>
      <CardHeader className="flex md:flex-row justify-between">
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you're done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button className="bg-gray-800">Publish</Button>
          <Button variant="destructive">Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            placeholder="MongoDB for Beginners"
          />
        </div>
        <div className="mb-4">
          <Label>Subtitle</Label>
          <Input
            type="text"
            name="subTitle"
            placeholder="hey this is the subtitle for a trail course"
          />
        </div>
        <div className="mb-4">
          <Label>Description</Label>
          <TextEditor />
        </div>
        <div className="flex md:flex-row flex-wrap gap-1 items-center md:gap-5 mb-4">
          <div>
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
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
          <div>
            <Label>Course Level</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a course level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course Level</SelectLabel>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advance">Advance</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Price in (BDT)</Label>
            <Input
              type="number"
              name="coursePrice"
              placeholder="500"
              className="w-fit"
            />
          </div>
        </div>
        <div className="mb-4">
          <Label>Course Thumbnail</Label>
          <Input 
          type="file" 
          id="file" 
          accept="image/*" 
          className="w-fit" />
        </div>
        <div className="flex gap-2">
            <Button onClick={()=>navigate('/admin/course')} variant="outline">Cancel</Button>
            <Button className="bg-gray-800">Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
