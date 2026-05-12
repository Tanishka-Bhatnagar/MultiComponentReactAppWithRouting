import { useState } from "react";
import { FaBars, FaEye } from "react-icons/fa";

function Home() {
  const [showList, setShowList] = useState(false);
  const [selectUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Aman",
      email: "aman@gmail.com",
      contact: "9876500000",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      contact: "9999999999",
    },
    {
      id: 4,
      name: "Sneha",
      email: "sneha@gmail.com",
      contact: "7777777777",
    },
    {
      id: 6,
      name: "Rohit",
      email: "rohit@gmail.com",
      contact: "6666666666",
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-72 bg-white shadow-lg p-4">
        <button onClick={()=>setShowList(!showList)} className="text-2xl mb-6">
          <FaBars/>

        </button>
      </div>
    </div>
  );
}

export default Home;
// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to the home page.</p>
//     </div>
//   );
// }

// export default Home;