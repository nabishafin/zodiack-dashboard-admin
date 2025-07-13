import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { User, Mail, Phone, MapPin, X, Search } from "lucide-react";

const AllUsers = () => {
  // Generate sample data for 378 users
  const generateUsers = () => {
    const users = [];
    const names = [
      "Jane Cooper",
      "John Doe",
      "Emily Smith",
      "Michael Brown",
      "Sarah Lee",
      "Alex Johnson",
      "Sophia Davis",
      "David Wilson",
      "Emma Garcia",
      "James Martinez",
      "Olivia Rodriguez",
      "William Anderson",
      "Ava Taylor",
      "Benjamin Thomas",
      "Isabella Jackson",
    ];
    const domains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "company.com",
    ];
    const countries = [
      "United Kingdom",
      "Germany",
      "Canada",
      "USA",
      "Australia",
      "Netherlands",
      "France",
      "Spain",
      "Italy",
      "Japan",
    ];

    for (let i = 1; i <= 378; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const domain = domains[Math.floor(Math.random() * domains.length)];
      const country = countries[Math.floor(Math.random() * countries.length)];

      users.push({
        id: `584${String(i).padStart(3, "0")}`,
        name: name,
        email: `${name.toLowerCase().replace(" ", ".")}${i}@${domain}`,
        address: country,
        phone: `+${Math.floor(Math.random() * 99) + 1} ${
          Math.floor(Math.random() * 9000) + 1000
        } ${Math.floor(Math.random() * 900000) + 100000}`,
        avatar: "/placeholder.svg?height=80&width=80",
      });
    }
    return users;
  };

  const allUsers = generateUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 10;

  // Filter users based on search term
  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="space-y-4 ">
      {/* Header */}
      <div className="bg-[#2C6E3E] text-white p-4 rounded-sm">
        <h2 className="text-lg font-semibold">All Users</h2>
      </div>

      {/* Search and Total Count */}
      <div className="bg-white border border-gray-200 p-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Total Users ({filteredUsers.length})
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search Name or ID"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200  overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#2C6E3E] hover:bg-[#2C6E3E]">
              {["ID", "User Name", "Email", "Address", "Action"].map(
                (heading, idx) => (
                  <TableHead
                    key={idx}
                    className="text-white font-medium text-center text-sm uppercase tracking-wider"
                  >
                    {heading}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user, index) => (
              <TableRow
                key={user.id}
                className={`hover:bg-gray-50 transition-all ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <TableCell className="text-center text-sm font-semibold text-gray-700">
                  {user.id}
                </TableCell>
                <TableCell className="text-center text-sm text-gray-600">
                  {user.name}
                </TableCell>
                <TableCell className="text-center text-sm text-gray-600">
                  {user.email}
                </TableCell>
                <TableCell className="text-center text-sm text-gray-600">
                  {user.address}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    onClick={() => handleViewUser(user)}
                    className="bg-[#2C6E3E] hover:bg-[#245530] text-white text-xs px-4 py-1 rounded-md"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevious();
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* User Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedUser && (
            <div className="flex flex-col items-center space-y-6 py-4">
              {/* User Avatar */}
              <div className="relative">
                <img
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* User Details */}
              <div className="w-full space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800 font-medium">
                    {selectedUser.name}
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800">{selectedUser.email}</span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800">{selectedUser.phone}</span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800">{selectedUser.address}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllUsers;
