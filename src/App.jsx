import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="h-40 w-96 overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-y-3">
          <Button variant="bg-blue-700">Login</Button>
          <Button variant="bg-slate-700">Logout</Button>
          <Button>Profile</Button>
          <Button variant="bg-pink-700">Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
