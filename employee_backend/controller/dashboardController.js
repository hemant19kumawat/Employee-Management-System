const Employee = require("../model/employeemodel");
const User = require("../model/usermodel");

const getDashboardData = async (req, res) => {
  try {
    // Total employees
    const totalEmployees = await Employee.countDocuments();

    // Total users
    const totalUsers = await User.countDocuments();

    // Employees by department
    const departmentData = await Employee.aggregate([
      {
        $group: {
          _id: "$department",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ]);

    // Average salary
    const salaryData = await Employee.aggregate([
      {
        $group: {
          _id: null,
          averageSalary: { $avg: "$salary" },
        },
      },
    ]);

    // Recent employees
    const recentEmployees = await Employee.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,

      totalEmployees,

      totalUsers,

      departments: departmentData.length,

      averageSalary: salaryData.length
        ? Math.round(salaryData[0].averageSalary)
        : 0,

      departmentData,

      recentEmployees,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data",
    });
  }
};

module.exports = { getDashboardData };
