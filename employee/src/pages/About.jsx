import React from 'react'
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>

      <h1 className="text-2xl font-bold mb-4">
        About Employee Management System
      </h1>

      <p className="text-gray-600">
        This application is used to manage employee
        information and perform employee CRUD operations.
      </p>

    </MainLayout>
  );
}

export default About;