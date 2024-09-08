import React from "react";
import PageLayout from "../../../component/PageLayout";
const page = () => {
  return (
    <PageLayout
      style={true}
      title="Exam Controller's Office"
      bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
    >
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Under Development</h1>
          <p className="text-gray-700">
            We are currently working hard to bring you this page. Please check
            back soon for updates.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
