export function validateEmployee(data) {

  if (!data.name) {
    return "Name is required";
  }

  if (!data.email) {
    return "Email is required";
  }

  if (!data.contact) {
    return "Contact is required";
  }

  if (!data.department) {
    return "Department is required";
  }

  if (!data.designation) {
    return "Designation is required";
  }

  if (!data.salary) {
    return "Salary is required";
  }

  return "";
}