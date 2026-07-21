import React from "react";

const UserCard = ({ users }) => {
  return (
    <div className="flex shrink-0 flex-wrap">
      {users.map((user) => {
        return (
          <div className="flex flex-col w-fit gap-2 p-4">
            <img
              className="w-80 h-60"
              src={user.image}
              alt=""
            />
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <h3 className="text-xl">{user.age} Years Old</h3>
            <h2 className="text-2xl font-semibold">{user.profession}</h2>
            <h3 className="text-xl">{user.location}</h3>
            <button className="bg-blue-500 p-4"> {user.isFollowing ? "Following" : "Follow"} </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
