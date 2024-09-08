"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import {
  FaUserTie,
  FaUserGroup,
  FaUserGraduate,
  FaUsers,
  FaUserGear,
  FaBuildingColumns,
  FaRegBuilding,
  FaGrip,
} from "react-icons/fa6";

const SSTUSTats = () => {
  const [stats, setStats] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/api/at-a-glance/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setStats(data[0]);
    } catch (error) {
      console.error("Error fetching stats data:", error);
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <div className="justify-center items-center flex flex-col gap-y-3">
        <p className="font-semibold text-2xl text-green-700 md:text-3xl text-center">
          SSTU AT A GLANCE
        </p>
        <div className="border-t border-2 border-green-500 w-14"></div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl px-5 text-justify">
        <div className="flex flex-col justify-center items-center p-4 h-[120px] md:h-[190px] w-full md:w-[220px] ">
          <p className="text-base md:text-lg leading-6">
            Sunamgonj Science and Technology University is a prominent
            institution of higher education located in Sunamganj, Bangladesh.
          </p>
        </div>
        <StatCard
          index={0}
          icon={<FaRegBuilding />}
          value={stats?.faculties}
          label="Faculties"
          isActive={activeCard === 0}
          onClick={handleCardClick}
        />
        <StatCard
          index={1}
          icon={<FaBuildingColumns />}
          value={stats?.departments}
          label="Departments"
          isActive={activeCard === 1}
          onClick={handleCardClick}
        />
        <StatCard
          index={2}
          icon={<FaUsers />}
          value={stats?.students}
          label="Students"
          isActive={activeCard === 2}
          onClick={handleCardClick}
        />
        <StatCard
          index={3}
          icon={<FaUserGraduate />}
          value={stats?.graduates}
          label="Graduates"
          isActive={activeCard === 3}
          onClick={handleCardClick}
        />
        <StatCard
          index={4}
          icon={<FaGrip />}
          value={stats?.institutes}
          label="Institutes"
          isActive={activeCard === 4}
          onClick={handleCardClick}
        />
        <StatCard
          index={5}
          icon={<FaUserTie />}
          value={stats?.teachers}
          label="Teachers"
          isActive={activeCard === 5}
          onClick={handleCardClick}
        />
        <StatCard
          index={6}
          icon={<FaUserGroup />}
          value={stats?.staffs}
          label="Staffs"
          isActive={activeCard === 6}
          onClick={handleCardClick}
        />
      </div>
    </section>
  );
};

const StatCard = ({ index, icon, value, label, isActive, onClick }) => (
  <div
    onClick={() => onClick(index)}
    className={`flex flex-col justify-center items-center p-4 h-[120px] md:h-[160px] w-full md:w-[220px] rounded-lg shadow-lg transition-all duration-300 ease-in-out transform cursor-pointer ${
      isActive
        ? "bg-green-500 text-white  rounded-2xl"
        : "border border-green-500 text-green-500 hover:bg-green-50 hover:rounded-2xl"
    }`}
  >
    <div className="flex flex-row justify-center items-center mb-2">
      <div className="text-3xl md:text-4xl">{icon}</div>
      <p className="font-bold text-3xl md:text-4xl leading-9 ml-2">{value}</p>
    </div>
    <p className="font-medium text-base md:text-lg leading-6 mt-3">{label}</p>
  </div>
);

export default SSTUSTats;
