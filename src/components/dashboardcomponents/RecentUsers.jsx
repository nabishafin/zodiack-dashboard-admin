import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { User, Mail, Phone, MapPin, X } from "lucide-react";

const RecentUsers = () => {
  const recentUsers = [
    {
      id: "584548",
      name: "Jane Cooper",
      email: "abc@email.com",
      address: "United Kingdom",
      phone: "+44 20 7946 0958",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584549",
      name: "John Doe",
      email: "john@email.com",
      address: "Germany",
      phone: "+49 30 12345678",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584550",
      name: "Emily Smith",
      email: "emily@email.com",
      address: "Canada",
      phone: "+1 416 555 0123",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584551",
      name: "Michael Brown",
      email: "michael@email.com",
      address: "USA",
      phone: "+1 555 123 4567",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584552",
      name: "Sarah Lee",
      email: "sarah@email.com",
      address: "Australia",
      phone: "+61 2 9876 5432",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584553",
      name: "Alex Johnson",
      email: "alex@email.com",
      address: "Netherlands",
      phone: "+31 20 123 4567",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "584554",
      name: "Sophia Davis",
      email: "sophia@email.com",
      address: "France",
      phone: "+33 1 42 86 83 26",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersPerPage = 7;

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = recentUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(recentUsers.length / usersPerPage);

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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
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
    <div className="space-y-4">
      <div className="overflow-x-auto">
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
            {currentUsers.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-gray-50 transition-all"
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
                    className="bg-[#2C6E3E] hover:bg-[#245530] text-white text-xs px-3 py-1 rounded-md"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end">
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

export default RecentUsers;
