// /**
//  * v0 by Vercel.
// * @see https://v0.dev/t/uachpXp9q8m
// * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
// */
"use client"

import { useState, useMemo } from "react"
import { Input } from "../../../components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../../../components/ui/dropdown-menu"
import { Button } from "../../../components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../components/ui/table"
import { Badge } from "../../../components/ui/badge"

export default function Component() {
 const [search, setSearch] = useState("")
 const [filters, setFilters] = useState({
   status: "all",
   dateRange: "all",
 })
 const orders = [
   {
     id: "ORD001",
     customer: "John Doe",
     date: "2023-04-15",
     total: 250.99,
     status: "Pending",
   },
   {
     id: "ORD002",
     customer: "Jane Smith",
     date: "2023-04-12",
     total: 149.99,
     status: "Shipped",
   },
   {
     id: "ORD003",
     customer: "Bob Johnson",
     date: "2023-04-10",
     total: 399.99,
     status: "Delivered",
   },
   {
     id: "ORD004",
     customer: "Sarah Lee",
     date: "2023-04-08",
     total: 79.99,
     status: "Cancelled",
   },
   {
     id: "ORD005",
     customer: "Tom Wilson",
     date: "2023-04-05",
     total: 199.99,
     status: "Pending",
   },
 ]
 const filteredOrders = useMemo(() => {
   return orders.filter((order) => {
     const searchValue = search.toLowerCase()
     const statusFilter = filters.status === "all" || order.status.toLowerCase() === filters.status
     const dateFilter = filters.dateRange === "all" || new Date(order.date) >= new Date(filters.dateRange)
     return (
       (order.id.toLowerCase().includes(searchValue) ||
         order.customer.toLowerCase().includes(searchValue) ||
         order.status.toLowerCase().includes(searchValue)) &&
       statusFilter &&
       dateFilter
     )
   })
 }, [search, filters])
 return (
   <div className="container mx-auto px-4 md:px-6 py-8">
     <div className="flex items-center justify-between mb-6">
       <h1 className="text-2xl font-bold">Orders</h1>
       <div className="flex items-center gap-4">
         <div className="relative">
           <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
           <Input
             type="text"
             placeholder="Search orders..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="pl-10 pr-4 py-2 rounded-md bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
           />
         </div>
         <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="outline" className="flex items-center gap-2">
               <FilterIcon className="w-5 h-5" />
               <span>Filters</span>
             </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end" className="w-64">
             <DropdownMenuLabel>Filter Orders</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuRadioGroup
               value={filters.status}
               onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value }))}
             >
               <DropdownMenuRadioItem value="all">All Status</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="pending">Pending</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="shipped">Shipped</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="delivered">Delivered</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="cancelled">Cancelled</DropdownMenuRadioItem>
             </DropdownMenuRadioGroup>
             <DropdownMenuSeparator />
             <DropdownMenuLabel>Date Range</DropdownMenuLabel>
             <DropdownMenuRadioGroup
               value={filters.dateRange}
               onValueChange={(value) => setFilters((prev) => ({ ...prev, dateRange: value }))}
             >
               <DropdownMenuRadioItem value="all">All Time</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="last30days">Last 30 Days</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="last90days">Last 90 Days</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="custom">Custom Range</DropdownMenuRadioItem>
             </DropdownMenuRadioGroup>
           </DropdownMenuContent>
         </DropdownMenu>
       </div>
     </div>
     <div className="overflow-x-auto">
       <Table>
         <TableHeader>
           <TableRow>
             <TableHead>Order #</TableHead>
             <TableHead>Customer</TableHead>
             <TableHead>Date</TableHead>
             <TableHead>Total</TableHead>
             <TableHead>Status</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {filteredOrders.map((order) => (
             <TableRow key={order.id} className="group cursor-pointer hover:bg-muted/50">
               <TableCell>
                 <p>
                   {order.id}
                   </p>
               </TableCell>
               <TableCell>{order.customer}</TableCell>
               <TableCell>{order.date}</TableCell>
               <TableCell>${order.total.toFixed(2)}</TableCell>
               <TableCell>
                 <Badge
                   variant={
                     order.status.toLowerCase() === "pending"
                       ? "warning"
                       : order.status.toLowerCase() === "shipped"
                       ? "info"
                       : order.status.toLowerCase() === "delivered"
                       ? "success"
                       : "danger"
                   }
                 >
                   {order.status}
                 </Badge>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </div>
   </div>
 )
}

function FilterIcon(props) {
 return (
   <svg
     {...props}
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
   >
     <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
   </svg>
 )
}


function SearchIcon(props) {
 return (
   <svg
     {...props}
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
   >
     <circle cx="11" cy="11" r="8" />
     <path d="m21 21-4.3-4.3" />
   </svg>
 )
}


function XIcon(props) {
 return (
   <svg
     {...props}
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
   >
     <path d="M18 6 6 18" />
     <path d="m6 6 12 12" />
   </svg>
 )
}