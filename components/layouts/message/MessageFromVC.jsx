"use client";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

function MessageFromVC() {
  return (
    <Card className="mt-6 container mx-auto  p-2">
      <Image className="w-48 h-48 object-cover bg-white absolute top-[-50px] right-16 p-2 border border-slate-200 shadow-md" src="https://sstu.ac.bd/wp-content/uploads/2024/01/1674212931820-240x300.jpg" alt="card-image" width={48} height={48} layout="responsive" />
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="font-thin">MESSAGE FROM</p>
          <p className="text-3xl ml-3 mt-1">VICE CHANCHELLOR</p>
        </Typography>
        <Typography className="w-3/4 text-justify">Welcome to the Office of the Vice-Chancellor at Sunamgonj Science and Technology University. Meet Prof. Dr. Md. Abu Naim Sheikh, our Vice-Chancellor: Prof. Dr. Md. Abu Naim Sheikh, our esteemed Vice-Chancellor, is a visionary leader dedicated to advancing education, research, and innovation at Sunamgonj Science and Technology University. With a wealth of experience in academia and a deep commitment to the university’s mission, Dr. Md. Abu Naim Sheikh leads the way in shaping the future of our institution. Contact Information: If you wish to get in touch with Prof. Dr. Md. Abu Naim Sheikh or the Office of the Vice-Chancellor, please use the following contact details: Email: vc@sstu.ac.bd Alternative Email: mansheikh@yahoo.com</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-green-500">Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default MessageFromVC;
