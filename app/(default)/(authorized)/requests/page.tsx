"use client";

import { useEffect } from "react";

export default function Requests() {
  useEffect(() => {
    async function loadData() {
      const response = await fetch("/api/requests", {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      return await response.json();
    }

    loadData().then((results) => {
      console.log("Looping Resuts");
      for (var i = 0; i < results.data.length; i++) {
        console.log("Result: ", results.data[i]);
      }
    });
  });

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <h1>Requests</h1>
          </div>
        </div>
      </section>
    </>
  );
}
