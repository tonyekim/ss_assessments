"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserCard from "@/components/UserCard";
import { users } from "../../constants/index";
import FilterComponent from "@/components/FilterComponent";

const Home = () => {
  const [progress, setProgress] = useState(13);
  const [selectedRelationship, setSelectedRelationship] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedRelationship === "all") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user) => user.relationship === selectedRelationship));
    }
  }, [selectedRelationship]);

  const handleRelationshipSelect = (value) => {
    setSelectedRelationship(value);
  };

  return (
    <main className="md:px-10">
      <div className="mb-6 lg:hidden">
        <FilterComponent />
      </div>
      <section className="flex flex-col px-4 lg:px-0 md:flex-row mb-10 md:mb-0 lg:my-10">
        <div className="flex md:mb-10 lg:mb-0 items-center space-x-4">
          <Image
            width={90}
            height={90}
            src="/travel-agent-profile.svg"
            alt="profile"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Welcome, Temiloluwa</h3>
            <div>
              <p className="text-xs font-medium">My Profile Completeness</p>
              <div className="w-[250px] flex items-center space-x-2 mt-2">
                <Progress value={progress} className="w-full [&>div]:bg-[#EF2424]" />
                <span className="text-xs inline-flex">60%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start my-6 lg:my-0 lg:items-center space-x-3 lg:ml-20">
          <p className="text-xs font-semibold">Relationship Type:</p>
          <Select onValueChange={handleRelationshipSelect} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Relationships" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Relationship</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="dating">Dating</SelectItem>
                <SelectItem value="marriage">Marriage</SelectItem>
                <SelectItem value="friendship">Friendship</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Home;


