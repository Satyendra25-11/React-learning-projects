import React from "react";
import UserCard from "./UserCard";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      age: 24,
      profession: "Frontend Developer",
      location: "Delhi, India",
      image: "https://i.pravatar.cc/300?img=11",
      isFollowing: false,
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 22,
      profession: "UI/UX Designer",
      location: "Mumbai, India",
      image: "https://i.pravatar.cc/300?img=47",
      isFollowing: true,
    },
    {
      id: 3,
      name: "Rahul Mehta",
      age: 27,
      profession: "Backend Developer",
      location: "Bangalore, India",
      image: "https://i.pravatar.cc/300?img=12",
      isFollowing: false,
    },
    {
      id: 4,
      name: "Sneha Patel",
      age: 25,
      profession: "Graphic Designer",
      location: "Ahmedabad, India",
      image: "https://i.pravatar.cc/300?img=45",
      isFollowing: false,
    },
    {
      id: 5,
      name: "Arjun Singh",
      age: 26,
      profession: "Full Stack Developer",
      location: "Pune, India",
      image: "https://i.pravatar.cc/300?img=13",
      isFollowing: true,
    },
    {
      id: 6,
      name: "Ananya Gupta",
      age: 23,
      profession: "Data Analyst",
      location: "Noida, India",
      image: "https://i.pravatar.cc/300?img=44",
      isFollowing: false,
    },
    {
      id: 7,
      name: "Rohan Kapoor",
      age: 28,
      profession: "Software Engineer",
      location: "Hyderabad, India",
      image: "https://i.pravatar.cc/300?img=15",
      isFollowing: true,
    },
    {
      id: 8,
      name: "Neha Joshi",
      age: 24,
      profession: "React Developer",
      location: "Indore, India",
      image: "https://i.pravatar.cc/300?img=48",
      isFollowing: false,
    },
    {
      id: 9,
      name: "Vikram Yadav",
      age: 29,
      profession: "Product Manager",
      location: "Gurgaon, India",
      image: "https://i.pravatar.cc/300?img=14",
      isFollowing: false,
    },
    {
      id: 10,
      name: "Kavya Nair",
      age: 21,
      profession: "Web Developer",
      location: "Chennai, India",
      image: "https://i.pravatar.cc/300?img=49",
      isFollowing: true,
    },
  ];

  return (
    <div>
      <UserCard
        users={users}
      />
    </div>
  );
};

export default App;
