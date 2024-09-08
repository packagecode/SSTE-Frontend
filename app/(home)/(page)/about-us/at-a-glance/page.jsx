import PageLayout from "@/app/component/PageLayout";
import SSTUSTats from "@/components/layouts/stats/SSTUSTats";
import React from "react";

const page = () => {
  return (
    <PageLayout
      style={true}
      title="At a Glance"
      bg="https://sciences.ucf.edu/statistics/wp-content/uploads/sites/2/2022/05/Data-Background-1600x525-1.jpg"
    >
      <div
        className="min-h-screen py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('lrbg2.png')",
        }}
      >
        <SSTUSTats />
      </div>
    </PageLayout>
  );
};

export default page;
