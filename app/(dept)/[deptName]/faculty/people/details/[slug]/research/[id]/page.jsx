"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import { FiCalendar, FiUsers, FiLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    const { id } = useParams();
    const [researchData, setResearchData] = useState([]);

    useEffect(() => {
        const fetchResearch = async () => {
            try {
                const response = await fetch(`${API_URL}/api/research/${id}`);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                setResearchData(data);
            } catch (error) {
                console.error("Error fetching research data:", error);
            }
        };
        fetchResearch();
    }, [id]);

    return (
        <div className="sm:container mx-10 sm:mx-auto my-10 flex flex-col gap-3">
            <div className="text-xl font-bold">{researchData.title}</div>
            <div className="text-sm flex items-center gap-2">
                {" "}
                <FiUsers /> {researchData.authors}
            </div>
            <div className="text-sm flex items-center gap-2">
                <FiCalendar />
                {researchData.j_name} - {researchData.year} ({researchData.volume})
            </div>
            <div className="text-sm flex items-center gap-2">
                <FiLink />
                <p>
                    DOI:{" "}
                    <Link href={researchData.doi} target="_blank">
                        {researchData.doi}
                    </Link>
                </p>
            </div>
            <div className="text-justify text-md mt-5">
                <b>ABSTRACT:</b> {researchData.abstract}
            </div>
            <div className="mt-5 font-bold text-xl border-l-2 border-l-green-500 pl-5">
                Research Images
            </div>
            <div className="my-5 flex items-center justify-center">
                <Image
                    src={researchData.research_img_1}
                    alt={researchData.title}
                    className="h-96 w-96"
                    width={96} height={96}
                    layout="responsive"
                />
            </div>
            <div className="my-5 flex items-center justify-center">
                <Image
                    src={researchData.research_img_2}
                    alt={researchData.title}
                    className="h-96 w-96"
                    width={96} height={96}
                    layout="responsive"
                />
            </div>
            <div className="my-5 flex items-center justify-center">
                <Image
                    src={researchData.research_img_3}
                    alt={researchData.title}
                    className="h-96 w-96"
                    width={96} height={96}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default Page;
