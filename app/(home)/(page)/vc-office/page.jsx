import React from "react";
import PageLayout from "../../../component/PageLayout";
import MessageFromVC from "@/components/layouts/message/MessageFromVC";

const page = () => {
  return (
    <PageLayout
      style={false}
      title="Vice Chancellor's Office"
      bg="/hero2.jpg"
    >
      <MessageFromVC />
      {/* <p className=" animate__animated animate__fadeInLeft">Welcome to the Office of the Vice-Chancellor at Sunamgonj Science and Technology University. Meet Prof. Dr. Md. Abu Naim Sheikh, our Vice-Chancellor: Prof. Dr. Md. Abu Naim Sheikh, our esteemed Vice-Chancellor, is a visionary leader dedicated to advancing education, research, and innovation at Sunamgonj Science and Technology University. With a wealth of experience in academia and a deep commitment to the university’s mission, Dr. Md. Abu Naim Sheikh leads the way in shaping the future of our institution. Contact Information: If you wish to get in touch with Prof. Dr. Md. Abu Naim Sheikh or the Office of the Vice-Chancellor, please use the following contact details: Email:</p> */}
    </PageLayout>
  );
};

export default page;
