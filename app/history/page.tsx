"use client"

import { useState } from "react"
import {
  Menu,
  User,
  Home,
  ShoppingBag,
  DollarSign,
  Clock,
  Utensils,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Sample history data
  const historyItems = [
    {
      id: "ORD-7829",
      customerName: "Rahul Sharma",
      items: [
        { name: "Butter Chicken", quantity: 1 },
        { name: "Naan", quantity: 2 },
      ],
      status: "Delivered",
      date: "Today, 2:30 PM",
      total: 350,
    },
    {
      id: "ORD-7823",
      customerName: "Priya Patel",
      items: [
        { name: "Paneer Tikka", quantity: 1 },
        { name: "Jeera Rice", quantity: 1 },
      ],
      status: "Delivered",
      date: "Today, 1:15 PM",
      total: 280,
    },
    {
      id: "ORD-7814",
      customerName: "Amit Kumar",
      items: [
        { name: "Veg Biryani", quantity: 1 },
        { name: "Raita", quantity: 1 },
      ],
      status: "Delivered",
      date: "Today, 12:45 PM",
      total: 220,
    },
    {
      id: "ORD-7809",
      customerName: "Sneha Gupta",
      items: [
        { name: "Chicken Biryani", quantity: 2 },
        { name: "Raita", quantity: 2 },
      ],
      status: "Delivered",
      date: "Yesterday, 7:30 PM",
      total: 480,
    },
    {
      id: "ORD-7798",
      customerName: "Vikram Singh",
      items: [
        { name: "Dal Makhani", quantity: 1 },
        { name: "Butter Naan", quantity: 3 },
      ],
      status: "Delivered",
      date: "Yesterday, 6:15 PM",
      total: 270,
    },
    {
      id: "ORD-7785",
      customerName: "Neha Kapoor",
      items: [
        { name: "Paneer Butter Masala", quantity: 1 },
        { name: "Garlic Naan", quantity: 2 },
      ],
      status: "Delivered",
      date: "2 days ago, 8:20 PM",
      total: 310,
    },
    {
      id: "ORD-7772",
      customerName: "Rajesh Khanna",
      items: [
        { name: "Chicken Tikka", quantity: 2 },
        { name: "Rumali Roti", quantity: 4 },
      ],
      status: "Delivered",
      date: "2 days ago, 7:45 PM",
      total: 420,
    },
    {
      id: "ORD-7761",
      customerName: "Ananya Desai",
      items: [
        { name: "Veg Pulao", quantity: 1 },
        { name: "Raita", quantity: 1 },
        { name: "Gulab Jamun", quantity: 2 },
      ],
      status: "Delivered",
      date: "3 days ago, 1:30 PM",
      total: 340,
    },
  ]

  // Calculate total stats
  const totalOrders = historyItems.length
  const totalEarnings = historyItems.reduce((sum, item) => sum + item.total, 0)
  const totalItems = historyItems.reduce(
    (sum, item) => sum + item.items.reduce((itemSum, i) => itemSum + i.quantity, 0),
    0,
  )

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b px-4 md:px-6 bg-white">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden rounded-md p-2 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <h1 className="text-xl font-bold text-[#426B1F]">KhanaBox</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-6 w-6" />
            <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#426B1F] text-xs text-white">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <User className="h-6 w-6" />
            <span className="sr-only">User profile</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 z-10 mt-16 w-64 border-r bg-white transition-transform md:static md:translate-x-0`}
        >
          <div className="flex h-full flex-col p-4">
            <nav className="space-y-1">
              <Link
                href="/"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Home className="mr-3 h-5 w-5" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
              <Link
                href="/orders"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Orders
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Earnings
              </Link>
              <Link
                href="/history"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-[#426B1F] text-white"
              >
                <Clock className="mr-3 h-5 w-5" />
                History
              </Link>
              <Link
                href="/menu"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Utensils className="mr-3 h-5 w-5" />
                Menu
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Order History</h1>
            <p className="text-sm text-gray-500">View all your past orders</p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 mb-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
              <p className="mt-2 text-3xl font-bold">{totalOrders}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Items Sold</h3>
              <p className="mt-2 text-3xl font-bold">{totalItems}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
              <p className="mt-2 text-3xl font-bold">₹{totalEarnings}</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full rounded-md border border-gray-300 pl-10 py-2 focus:border-[#426B1F] focus:outline-none focus:ring-1 focus:ring-[#426B1F]"
              />
            </div>
            <select className="rounded-md border border-gray-300 py-2 px-3 focus:border-[#426B1F] focus:outline-none focus:ring-1 focus:ring-[#426B1F]">
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          {/* History Table */}
          <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Order ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Items</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Quantity</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {historyItems.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm font-medium">{item.id}</td>
                      <td className="px-4 py-4 text-sm">{item.customerName}</td>
                      <td className="px-4 py-4 text-sm">
                        <div className="space-y-1">
                          {item.items.map((food, index) => (
                            <div key={index}>{food.name}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <div className="space-y-1">
                          {item.items.map((food, index) => (
                            <div key={index}>{food.quantity}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">{item.date}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium">₹{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t px-4 py-3">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
                <span className="font-medium">24</span> results
              </div>
              <div className="flex gap-1">
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Previous
                </button>
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

