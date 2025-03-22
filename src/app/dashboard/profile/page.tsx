"use client";

export default function Profile() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <h1>
      <div className="flex flex-col items-center">
        Username
        <input className="border" type="text" value="KienPT" />
        <button onClick={handleClick}>Click</button>
      </div>
    </h1>
  );
}
