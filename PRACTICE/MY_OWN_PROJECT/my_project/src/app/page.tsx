"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function Home() {
  const [journey, setJourney] = useState<
    { journey: { _type: string; style?: string; children?: { text: string; marks?: string[] }[] }[] }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "personalInformation"]{
            "journey": journey
          }`
        );
        setJourney(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Journey</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {journey.map((item, index) => (
            <div key={index}>
              {item.journey.map((block, i) => {
                if (block._type === "block") {
                  // Process text within block.children
                  return block.children?.map((child, j) => {
                    if (block.style === "h1") {
                      // Render heading
                      return (
                        <h1 key={j} className="font-bold text-2xl">
                          {child.text}
                        </h1>
                      );
                    } else if (child.marks?.includes("bold")) {
                      // Render bold text
                      return (
                        <p key={j} className="font-bold">
                          {child.text}
                        </p>
                      );
                    } else {
                      // Render normal text
                      return <p key={j}>{child.text}</p>;
                    }
                  });
                }
                return null;
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
