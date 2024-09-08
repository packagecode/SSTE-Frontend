import React from "react";
import PageLayout from "../../../component/PageLayout";
import LatestResearch from "@/components/latestresearch/LatestResearch";
const page = () => {
  return (
    <PageLayout
      style={false}
      title="Research & Extension"
      bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
    >
      <div className="py-10">
        <LatestResearch />
      </div>
    </PageLayout>
  );
};

export default page;
