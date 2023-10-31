"use client";

export default function Page() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <div>
        <button id="test" onClick={() => console.log("1")}>
          1
        </button>
        <button id="aaa" onClick={() => console.log("2")}>
          2
        </button>
        <button id="test2" onClick={() => console.log("3")}>
          3
        </button>
        <button id="bbb" onClick={() => console.log("4")}>
          4
        </button>
        <button id="ccc" onClick={() => console.log("5")}>
          5
        </button>
      </div>
      <div>
        <button
          className="download"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer?.push({
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
