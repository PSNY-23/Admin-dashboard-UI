"use client";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { TbInvoice } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { TbSettings2 } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { GoSidebarExpand } from "react-icons/go";

import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { GrDocumentVerified } from "react-icons/gr";
import { GrDocumentTime } from "react-icons/gr";
import MyBarChart from "@/components/BarChart";
import { ListData } from "@/utils/ListData";
import { useState } from "react";

const sidebarData = [
  { icons: <MdDashboard />, title: "Dashboard", isActive: true },
  { icons: <BsGraphUp />, title: "Projects", isActive: false },
  { icons: <TbInvoice />, title: "Transactions", isActive: false },
  { icons: <RiTeamLine />, title: "My Team", isActive: false },
  { icons: <MdBarChart />, title: "Research Data", isActive: false },
  { icons: <TbReportSearch />, title: "Reports", isActive: false },
  { icons: <TbSettings2 />, title: "Setting", isActive: false },
  { icons: <MdLightbulbOutline />, title: "Help", isActive: false },
  { icons: <MdDashboard />, title: "Dashboard", isActive: true },
  { icons: <BsGraphUp />, title: "Projects", isActive: false },
  { icons: <TbInvoice />, title: "Transactions", isActive: false },
  { icons: <RiTeamLine />, title: "My Team", isActive: false },
  { icons: <MdBarChart />, title: "Research Data", isActive: false },
  { icons: <TbReportSearch />, title: "Reports", isActive: false },
  { icons: <TbSettings2 />, title: "Setting", isActive: false },
  { icons: <MdLightbulbOutline />, title: "Help", isActive: false },
];

const cardData = [
  {
    icon: <HiOutlineClipboardDocument />,
    title: "Total Projects",
    amount: "10,724",
    percentage: "0%",
    description: "All running and completed projects",
  },
  {
    icon: <GrDocumentVerified />,
    title: "Completed Projects",
    amount: "9,801",
    percentage: "+12%",
    description: "Completion rate this month",
  },
  {
    icon: <GrDocumentTime />,
    title: "Running Projects",
    amount: "923",
    percentage: "+8%",
    description: "Running projects increases",
  },
];

import { LuLogOut } from "react-icons/lu";
import SmallBarChart from "@/components/SmallBarChart";

const DashboardPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className='h-screen flex w-screen'>
      {/* sidebar */}

      <div
        className={`fixed top-0 max-w-64 p-6 left-0 h-full overflow-hidden bg-white flex  flex-col justify-between gap-2 transition-all duration-300 ease-in-out ${
          isCollapsed ? "" : ""
        }`}
      >
        <div className={`flex cursor-pointer ${isCollapsed ? "justify-center" : "justify-end"}`}>
          <GoSidebarExpand className='text-4xl text-blue' onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>

        <div className='flex gap-4'>
          <Image src='/profile.png' alt='' width={64} height={64} className='rounded-full aspect-square p-2' />
          <div className={`flex flex-col max-sm:hidden justify-center  ${isCollapsed ? "hidden" : "block"}`}>
            <p className='text-md font-semibold text-gray-800'>Pankaj Kumar</p>
            <p className='text-xs text-gray-600 font-extralight'>Full Stack Developer</p>
          </div>
        </div>
        <div className='flex-1 flex flex-col space-y-4 ml-2 overflow-y-scroll pr-1'>
          {sidebarData.map((items) => (
            <div
              key={items.title}
              className={`flex gap-4 items-center py-1.5 pl-2 rounded-md ${
                items.isActive ? "bg-blue text-gray-100" : "text-gray-600"
              } `}
            >
              <div className={`font-bold text-xl `}>{items.icons}</div>
              <p className={`text-base ${isCollapsed ? "hidden" : "block"}`}>{items.title}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-start items-center gap-2 bg-gray-200 py-2 px-3 rounded-md mr-6'>
          <LuLogOut className='text-gray-600 h-6 w-6' />
          <p className={`font-semibold text-gray-600 ${isCollapsed ? "hidden" : "block"}`}>Log Out</p>
        </div>
      </div>
      {/* left: main page */}
      <div
        className={`h-full flex-1 flex flex-col gap-2 transition-all duration-200 ease-in-out ${
          isCollapsed ? "ml-24" : "ml-64"
        }`}
      >
        <div className='px-10 pt-6 flex justify-between'>
          <div className='text-gray-800'>
            <p className='font-bold text-2xl'>Dashboard</p>
            <p className='text-sm text-gray-400'>12th Oct 2023</p>
          </div>
          <div className='flex justify-end gap-2 items-center'>
            <div className='flex items-center gap-2 border rounded-full px-3 py-1.5 bg-gray-200 '>
              <CiSearch className='h-6 w-6 text-gray-400' />
              <input type='text' placeholder='Search' className='placehold:text-gray-400 outline-none bg-transparent' />
            </div>
            <div className='flex items-center justify-between space-x-2 border py-1.5 rounded-full px-3 bg-gray-200'>
              <IoIosSunny className='h-6 scale-125 w-6 text-yellow-400 bg-white rounded-full' />
              <IoMoonOutline className='h-6 w-6 text-gray-400' />
            </div>
            <div className='py-1.5 px-3 bg-gray-200 rounded-full'>
              <AiOutlineMessage className='h-6 w-6 text-gray-400' />
            </div>
            <div className='flex items-center gap-1 border px-2 rounded-full border-gray-200'>
              <Image src='/profile.png' alt='' width={56} height={56} className='rounded-full aspect-square p-2' />
              <p className='text-lg font-semibold text-gray-800'>Pankaj</p>
            </div>
          </div>
        </div>
        <div className='px-10 min-h-screen p-4 flex gap-4 flex-col sm:flex-row'>
          {/* card-bar column */}
          <div className='flex-1 flex flex-col gap-4'>
            <div className='flex justify-between flex-wrap gap-4 '>
              {cardData.map((data) => (
                <div key={data.title} className='bg-white p-6 rounded-xl flex flex-1 items-start gap-2'>
                  <div className='h-full flex flex-col justify-between items-center'>
                    <div className='h-10 w-10 bg-gray-200 p-2 rounded-md '>{data.icon}</div>
                    <div className='bg-green-100 text-green-500 px-1 py-0.5 rounded-md text-xs'> {data.percentage}</div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-lg text-gray-400 font-thin'>{data.title}</p>
                    <h3 className='text-3xl text-gray-600'>{data.amount}</h3>
                    <div className=''>
                      <span className='text-gray-400 text-xs'>{data.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='p-4 bg-white rounded-xl'>
              <div className='flex justify-between items-center p-2'>
                <h1 className='text-lg font-semibold text-gray-700'>Revenue Chart</h1>
                <p className=''>
                  <select className='p-2 border-2 rounded-lg text-gray-700 outline-none font-thin'>
                    <option value=''>Select Year</option>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                  </select>
                </p>
              </div>
              <div className='rounded-xl mt-2'>
                <MyBarChart />
              </div>
            </div>
            <div className='flex flex-col p-4 bg-white rounded-lg'>
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold text-gray-700'>Transactions</h1>
                <p className=''>
                  <select className='p-2 border-2 rounded-lg text-gray-700 outline-none font-thin'>
                    <option value=''>All Data</option>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                  </select>
                </p>
              </div>

              <div className='text-sm font-thin mt-2 overflow-x-auto '>
                <table className='min-w-full table-auto overflow-hidden'>
                  <thead className=''>
                    <tr>
                      <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border'>Name</th>
                      <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border'>Status</th>
                      <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border'>Date</th>
                      <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border'>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ListData.map((item, index) => (
                      <tr className='' key={index}>
                        <td className='px-4 py-2 text-left text-sm text-gray-700 border-b flex items-center gap-2'>
                          <span>
                            <Image src={item.Image} alt={item.Name} width={40} height={40} className='rounded-full' />
                          </span>
                          <span className='font-semibold'>{item.Name}</span>
                        </td>
                        <td
                          className={`px-4 py-2 text-left text-sm text-gray-700 border-b opacity-90
                          `}
                        >
                          <span
                            className={`${
                              item.Status === "Completed"
                                ? "bg-green-100 text-green-400 px-4 py-2 rounded-full"
                                : item.Status === "In Progress"
                                ? "bg-orange-100 text-orange-400  px-4 py-2 rounded-full"
                                : "bg-red-100 text-red-400 px-4 py-2 rounded-full"
                            }`}
                          >
                            {item.Status}
                          </span>
                        </td>
                        <td className='px-4 py-2 text-left text-sm text-gray-700 border-b font-semibold'>
                          {item.Date}
                        </td>
                        <td
                          className={`px-4 py-2 text-left text-sm font-bold text-gray-700 border-b ${
                            item.Amount > 0 ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {`${item.Amount > 0 ? "+" : "-"}₹${Math.abs(item.Amount).toLocaleString()}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Right side cards */}
          <div className='w-64 flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-lg flex flex-col items-start'>
              <span className='bg-violet-100 text-blue px-4 py-1 rounded-full text-xs'>Team Review</span>
              <p className='text-xl mt-4 font-thin text-gray-700'>Oxish Project Team</p>
              <p className='text-xs mt-1 text-gray-400'>
                Oxish is built for every user of your project team to plan, manage.
              </p>
              <div className='mt-2 flex justify-start items-center gap-2 text-xs text-gray-500 font-semibold'>
                <p>14.10.2023</p>
                <p className='bg-gray-100 rounded-md px-2 py-1'>15 Members</p>
              </div>
              <div className='flex justify-center items-center mt-3'>
                <p className='text-base text-gray-500 font-semibold bg-gray-100 rounded-full px-3 py-2'>Notion File</p>
                <p className=''>Image logo</p>
              </div>
            </div>
            <div className='bg-white p-4 rounded-lg flex flex-col items-start'>
              <span className='bg-violet-100 text-gray-600 px-4 py-1 rounded-full text-xs'>Meeting</span>
              <p className='text-xl mt-4 font-thin text-gray-700'>Upcoming Event Planning Discussion</p>
              <p className='text-xs mt-1 text-gray-400'>
                Oxish is built for every user of your project team to plan, manage.
              </p>
              <div className='mt-2 flex justify-start items-center gap-2 text-xs text-gray-500 font-semibold'>
                <p>16th Oct</p>
                <p className='bg-gray-100 rounded-md px-2 py-1'>11:00-12:00</p>
              </div>
              <div className='flex justify-center items-center mt-3 w-full'>
                <p className='w-full text-base text-gray-500 font-semibold bg-gray-100 rounded-full px-3 py-2 text-center'>
                  Meeting Zoom Link
                </p>
              </div>
            </div>

            <div className=' overflow-scroll bg-white rounded-lg p-2'>
              <SmallBarChart />
            </div>
          </div>
        </div>
      </div>
      <div className='w-2'></div>
    </div>
  );
};

export default DashboardPage;
