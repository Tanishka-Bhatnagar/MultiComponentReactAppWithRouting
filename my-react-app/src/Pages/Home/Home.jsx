import { useState } from "react";
import { FaEye } from "react-icons/fa";

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    {
      id: 1, firstName: "Rahul", lastName: "Sharma", email: "rahul@gmail.com", contact: "9876543210", expertise: "React",
    },
    {
      id: 2, firstName: "Aman", lastName: "Verma", email: "aman@gmail.com", contact: "9876500000", expertise: "NodeJS",
    },
    {
      id: 3, firstName: "Priya", lastName: "Singh", email: "priya@gmail.com", contact: "9999999999", expertise: "Python",
    },
    {
      id: 4, firstName: "Karan", lastName: "Mehta", email: "karan@gmail.com", contact: "8888888888", expertise: "Java",
    },
    {
      id: 5, firstName: "Sneha", lastName: "Kapoor", email: "sneha@gmail.com", contact: "7777777777", expertise: "C++",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">User List</h1>
      {/* GRID TABLE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-3 bg-blue-500 text-white font-bold p-4">
          <div>First Name</div>
          <div>Last Name</div>
          <div className="text-center">View Details</div>
        </div>
        {/* displaying user name last name and view icon in table (grid)*/}
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-3 p-4 border-b items-center hover:bg-gray-100">

            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div className="flex justify-center">
              <button onClick={() =>setSelectedUser(user)} className="text-blue-500 hover:text-blue-700 text-xl"><FaEye /></button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedUser && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          {/* MODAL CARD */}
          <div className="bg-white w-[400px] rounded-2xl shadow-2xl p-6 relative">

            {/* CLOSE BUTTON */}
            <button onClick={() => setSelectedUser(null)} className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">
            X
            </button>

            {/* USER DETAILS */}
            <h2 className="text-3xl font-bold mb-6 text-center">User Details</h2>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-bold">First Name:</span>{" "}{selectedUser.firstName}
              </p>
              <p>
                <span className="font-bold">Last Name:</span>{" "}{selectedUser.lastName}
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}{selectedUser.email}
              </p>
              <p>
                <span className="font-bold">Contact:</span>{" "}{selectedUser.contact}
              </p>
              <p>
                <span className="font-bold">Expertise:</span>{" "}{selectedUser.expertise}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
