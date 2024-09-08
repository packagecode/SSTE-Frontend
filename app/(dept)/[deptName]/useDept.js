import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { API_URL } from "@/app/apiurl";

export const useDept = () => {
  const pathname = usePathname();
  const router = useRouter();
  const deptPath = router.query;

  const [deptName, setDeptName] = useState("");
  const [deptId, setDeptId] = useState("");
  const [api, setAPI] = useState("");

  useEffect(() => {
    const dept = pathname.split("/")[1];
    if (dept === "cse") {
      setDeptName("Computer Science and Engineering");
      setDeptId("cse");
      setAPI(API_URL + "/api/dept/cse");
    } else if (dept === "math") {
      setDeptName("Mathematics");
      setDeptId("math");
      setAPI(API_URL + "/api/dept/mat");
    } else if (dept === "phy") {
      setDeptName("Physics");
      setDeptId("phy");
      setAPI(API_URL + "/api/dept/phy");
    } else if (dept === "chem") {
      setDeptName("Chemistry");
      setDeptId("chem");
      setAPI(API_URL + "/api/dept/chem");
    } else {
      router.replace("cse/notFound");
    }
  }, [pathname, router]);

  return { deptName, deptId, api };
};
