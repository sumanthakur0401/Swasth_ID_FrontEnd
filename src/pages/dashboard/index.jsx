import { Profile } from "@/components/Home/Profile";
import { Topcontainer } from "@/components/Home/TopContainer";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

const Index = () => {
  return (
    <>
      <Layout>
        <Profile />
        <Topcontainer />
      </Layout>
    </>
  );
};

export default Index;
