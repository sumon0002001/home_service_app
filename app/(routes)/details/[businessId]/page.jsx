"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const BusinessDetails = () => {
  const { data, status } = useSession();

  if (status == "loading") {
    <p>Loading</p>;
  }

  if (status == "unauthenticated") {
    //redirect to login page
    signIn("descope");
  }

  return status == "authenticated" && <div>businessdetails</div>;
};

export default BusinessDetails;
