"use client";
import React from "react";
import Image from "next/image";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  TagIcon,
  CubeIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  PlusIcon,
  TicketIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Amount",
        data: [20, 30, 50, 70, 40, 90, 507, 60, 20, 50, 40, 10],
        backgroundColor: "#8B5CF6",
      },
    ],
  };

  const doughnutData = {
    labels: [
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
      "Unverified",
    ],
    datasets: [
      {
        label: "Orders",
        data: [20, 9, 5, 7, 0, 1],
        backgroundColor: [
          "#3B82F6",
          "#FACC15",
          "#10B981",
          "#22C55E",
          "#EF4444",
          "#F97316",
        ],
      },
    ],
  };

  // Card content
  const cards = [
    { title: "Total Categories", value: "12", icon: TagIcon },
    { title: "Total Products", value: "123", icon: CubeIcon },
    { title: "Total Customers", value: "456", icon: UserGroupIcon },
    { title: "Total Orders", value: "789", icon: ShoppingCartIcon },
    { title: "Add Category", value: "", icon: PlusIcon },
    { title: "Add Product", value: "", icon: PlusIcon },
    { title: "Add Coupon", value: "", icon: TicketIcon },
    { title: "Add Media", value: "", icon: PhotoIcon },
  ];

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="relative w-1/3">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border px-3 py-2 rounded w-full pr-10"
                    aria-label="Search"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                </span>
            </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-purple-100 p-4 rounded-lg shadow hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-2 space-x-3">
                <card.icon className="h-8 w-8 text-purple-800" />
                <h2 className="text-lg font-semibold">{card.title}</h2>
              </div>
              {card.value && <p className="text-3xl font-bold">{card.value}</p>}
            </div>
          ))}
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow col-span-2">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Order Overview</h2>
              <button className="text-sm bg-purple-500 text-white px-4 py-1 rounded">
                View All
              </button>
            </div>
            <Bar data={barData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Orders Status</h2>
              <button className="text-sm bg-purple-500 text-white px-4 py-1 rounded">
                View All
              </button>
            </div>
            <Doughnut data={doughnutData} />
            <div className="mt-4 text-sm">
              <OrderLabel color="blue" label="Pending" count={20} />
              <OrderLabel color="yellow" label="Processing" count={9} />
              <OrderLabel color="green" label="Shipped" count={5} />
              <OrderLabel color="emerald" label="Delivered" count={7} />
              <OrderLabel color="red" label="Cancelled" count={0} />
              <OrderLabel color="orange" label="Unverified" count={1} />
            </div>
          </div>
        </div>
        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
              <button className="text-sm bg-purple-500 text-white px-4 py-1 rounded mb-4">
                View All
              </button>
            </div>
            {/* Recent orders content goes here */}
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Order ID</TableColumn>
                <TableColumn>Payment ID</TableColumn>
                <TableColumn>Total Item</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Amount</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>12345</TableCell>
                  <TableCell>pay_67890</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Shipped</TableCell>
                  <TableCell>$150.00</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>12346</TableCell>
                  <TableCell>pay_67891</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Processing</TableCell>
                  <TableCell>$75.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
              <button className="text-sm bg-purple-500 text-white px-4 py-1 rounded mb-4">
                View All
              </button>
            </div>
            {/* Centered Recent products image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/notfound.png"
                alt="Recent Product"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const OrderLabel = ({ color, label, count }) => (
  <div className="flex justify-between mb-1">
    <span className={`text-${color}-500 font-medium`}>{label}</span>
    <span className="text-gray-700">{count}</span>
  </div>
);

export default Dashboard;
