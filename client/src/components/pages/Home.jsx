import React, { useEffect, useState } from "react";
import Navbar from "../NavFooter.jsx/Navbar";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/profile`, {
          withCredentials: true,
        });
        const data = res.data;
        console.log(data.name);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log();

  return (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      <Navbar />
      <h2 className="text-purple-400 text-2xl mt-4">
        Welcome to Flourish, Mr.{user?.name.name}
      </h2>
      <img
        src={user?.name.picture}
        alt="profile"
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
        }}
      />

      <span className="w-2/3 h-fit text-md p-4 font-sans text-purple-400 text-wrap">
        where we help you find the perfect Investment solution for your
        business. Our platform connects you with a wide range of investment
        opportunities, allowing you to find the best fit for your needs. With
        our user-friendly interface and expert guidance, you can easily browse
        and compare investment options, and make informed decisions that will
        help your business grow. Join us today and take the first step towards
        success with Flourish.
      </span>
    </div>
  );
};

export default Home;
