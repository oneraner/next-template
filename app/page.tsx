"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function Page() {
  useEffect(()=>{
    window.dataLayer.push({
      type: "profile",
      userId: Math.floor(Math.random() * 100000000).toString().substring(0, 8),
      merchantId: Math.floor(Math.random() * 10000000000).toString().substring(0, 12),
    });
  },[])
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <div className="flex gap-2">
        <button
          id="test"
          data-testid="test"
          className="px-2 py-1 w-8 h-8 border border-gray-900 border-solid"
          onClick={() => console.log("1")}
        >
          1
        </button>
        <button
          id="aaa"
          className="px-2 py-1 w-8 h-8 border border-gray-900 border-solid"
          onClick={() => console.log("2")}
        >
          2
        </button>
        <button
          id="test2"
          className="px-2 py-1 border w-8 h-8 border-gray-900 border-solid"
          onClick={() => console.log("3")}
        >
          3
        </button>
        <button
          id="bbb"
          className="px-2 py-1 border w-8 h-8 border-gray-900 border-solid"
          onClick={() => console.log("4")}
        >
          4
        </button>
        <button
          id="ccc"
          className="px-2 py-1 border border-gray-900 border-solid"
          onClick={() => console.log("5")}
        >
          5
        </button>
      </div>
      <div>
        <button
          className="download"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer.push({
                type: "download",
                value: "test000",
                value1: "test111",
              });
            }
          }}
        >
          download
        </button>
      </div>
    </main>
  );
}
