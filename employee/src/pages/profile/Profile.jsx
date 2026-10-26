import React from "react";
import MainLayout from "../../layouts/MainLayout";

function Profile() {

  return (
    <MainLayout>

      <h1 className="text-2xl font-bold mb-6">
        My Profile
      </h1>


      <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl">

        <div className="grid grid-cols-2 gap-6">


          <div>

            <p className="text-gray-500">
              Name
            </p>

            <p className="font-semibold">
              Admin
            </p>

          </div>


          <div>

            <p className="text-gray-500">
              Email
            </p>

            <p className="font-semibold">
              admin@gmail.com
            </p>

          </div>


          <div>

            <p className="text-gray-500">
              Role
            </p>

            <p className="font-semibold">
              Admin
            </p>

          </div>


        </div>


        <button className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg">
          Edit Profile
        </button>


      </div>

    </MainLayout>
  );
}

export default Profile;