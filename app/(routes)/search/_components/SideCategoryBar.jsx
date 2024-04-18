"use client";
import React, { useState, useEffect } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";

const SideCategoryBar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((response) => {
      setCategoryList(response.categories);
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <div
            key={index}
            className={`flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-purple-50 hover:shadow-md items-center hover:text-primary hover:border-primary `}
          >
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCategoryBar;
