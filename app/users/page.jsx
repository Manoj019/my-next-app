import React from 'react'

const Users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return (
    <>
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div
            key={user.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Users