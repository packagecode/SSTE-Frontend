import Construct from "@/app/(dept)/components/underDevelopment/Construct";
import PageLayout from "@/app/component/PageLayout";
import CampusLife from "@/components/layouts/gallery/CampusLife";
import React from "react";

const page = () => {
  return (
    <PageLayout
      style={true}
      title="Gallery"
      bg="https://www.datocms-assets.com/103094/1695117153-1502966667005745-uffizi-header.jpg?auto=format%2Ccompress&fit=crop&h=800&w=1920"
    >
      <CampusLife />
    </PageLayout>
  );
};

export default page;
