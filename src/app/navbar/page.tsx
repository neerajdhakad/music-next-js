export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center gap-5 w-full h-20 bg-indigo-600">
        <h1 className="text-xl hover:underline cursor">Home</h1>
        <h1 className="text-xl hover:underline">About</h1>
        <h1 className="text-xl hover:underline">Projects</h1>
      </div>
    </>
  );
}
