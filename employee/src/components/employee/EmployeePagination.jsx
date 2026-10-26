import React from "react";

function EmployeePagination({ page, setPage }) {
  return (
    <div className="flex justify-center gap-2 mt-5">

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 border rounded"
      >
        Previous
      </button>

      <span className="px-3 py-2">
        {page}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        className="px-3 py-2 border rounded"
      >
        Next
      </button>

    </div>
  );
}

export default EmployeePagination;