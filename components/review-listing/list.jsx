"use client";
import { useState } from "react";
import { FaFilePdf, FaFileExcel, FaCopy, FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const ListReviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    { id: 1, name: "Leadership-to-teacher feedback", category: "Leadership", totalQuestions: 30, createdDate: "02-18-2025", status: "Active" },
    { id: 2, name: "Leadership-to-teacher feedback", category: "Leadership", totalQuestions: 30, createdDate: "02-18-2025", status: "Inactive" },
    { id: 3, name: "Leadership-to-teacher feedback", category: "Leadership", totalQuestions: 30, createdDate: "02-18-2025", status: "Active" },
  ];

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  //  Select All Checkboxes
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : filteredData.map(item => item.id));
  };

  //  Handle Individual Checkbox
  const handleCheckboxChange = (id) => {
    setSelectedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
  };

  //  Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Feedback Report", 20, 10);
    let y = 20;
    filteredData.forEach(item => {
      doc.text(`${item.id}. ${item.name} - ${item.category} - ${item.totalQuestions} Qs - ${item.createdDate} - ${item.status}`, 10, y);
      y += 10;
    });
    doc.save("feedback-report.pdf");
  };

  //  Export Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Feedback Data");
    XLSX.writeFile(workbook, "feedback-report.xlsx");
  };

  //  Copy to Clipboard
  const copyToClipboard = () => {
    const text = filteredData.map(item => `${item.id}. ${item.name} - ${item.category} - ${item.totalQuestions} Qs - ${item.createdDate} - ${item.status}`).join("\n");
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  //  View, Edit, Delete Actions
  const handleView = (id) => alert(`Viewing details of item ${id}`);
  const handleEdit = (id) => alert(`Editing item ${id}`);
  const handleDelete = (id) => confirm(`Are you sure you want to delete item ${id}?`) && alert(`Deleted item ${id}`);

  return (
    <div className="flex justify-center pl-10 pr-10 pb-50 h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 w-full ">
        
        {/* Buttons */}
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button onClick={generatePDF} className="px-4 py-2 bg-[#F8F8F8] text-[#272A3A] rounded-md flex items-center space-x-2">
              <FaFilePdf /> <span>PDF</span>
            </button>
            <button onClick={exportExcel} className="px-4 py-2 bg-[#F8F8F8] text-[#272A3A] rounded-md flex items-center space-x-2">
              <FaFileExcel /> <span>Excel</span>
            </button>
            <button onClick={copyToClipboard} className="px-4 py-2 bg-[#F8F8F8] text-[#272A3A] rounded-md flex items-center space-x-2">
              <FaCopy /> <span>Copy</span>
            </button>
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md pl-10 pr-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full h-70 border-collapse">
          <thead>
            <tr className="text-base  bg-[#F8F8F8] text-[#8A92A6] h-16 text-left">
              <th className="p-2"><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Total Questions</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">
                  <input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => handleCheckboxChange(item.id)} />
                </td>
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.totalQuestions}</td>
                <td className="p-2">{item.createdDate}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-white ${item.status === "Active" ? "bg-[#439E5E]" : "bg-red-400"}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 py-8 space-x-2 flex flex-row">
                  <button onClick={() => handleView(item.id)} className="bg-[#439E5E] text-white px-2 py-1 rounded flex items-center">
                    <FaEye />
                  </button>
                  <button onClick={() => handleEdit(item.id)} className="bg-[#2D2D2D] text-white px-2 py-1 rounded flex items-center">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="bg-[#FF5050] text-white px-2 py-1 rounded flex items-center">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span>Showing Page {currentPage} of {totalPages}</span>
          <div className="flex space-x-1">
            <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} className="px-3 py-1 bg-gray-200 rounded-md">&lt;</button>
            {Array.from({ length: 5 }, (_, i) => currentPage + i <= totalPages && (
              <button key={i} className={`px-3 py-1 rounded-md ${currentPage === currentPage + i ? "bg-gray-500 text-white" : "bg-gray-200"}`} onClick={() => setCurrentPage(currentPage + i)}>
                {currentPage + i}
              </button>
            ))}
            <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} className="px-3 py-1 bg-gray-200 rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListReviews;