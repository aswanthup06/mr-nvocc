"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaList,
  FaTasks,
  FaClipboardList,
  FaBox,
  FaFileInvoiceDollar,
  FaFileAlt,
  FaClipboardCheck,
  FaWarehouse,
} from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-blue-950 text-white p-4">
      <h1 className="text-lg font-medium mb-6 bg-white/10 p-2 rounded-md">Export</h1>
      <nav>
        <ul>
          <li className="mb-3">
            <Link
              href="/"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/' ? 'text-sky-300' : 'text-white'
              }`}
            >
              <FaHome className={pathname === '/' ? 'text-sky-300' : 'text-white'} />
              Home
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/evaluation-task-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/evaluation-task-list' ? 'text-sky-300' : 'text-white'
              }`}
            >
              <FaList className={pathname === '/evaluation-task-list' ? 'text-sky-300' : 'text-white'} />
              Evaluation Task List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/invoice-submission"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/invoice-submission' ? 'text-sky-300' : 'text-white'
              }`}
            >
              <FaTasks className={pathname === '/invoice-submission' ? 'text-sky-300' : 'text-white'} />
             Invoice Submission
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/invoice-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/invoice-list' ? 'text-sky-300' : 'text-white'
              }`}
            >
              <FaClipboardCheck className={pathname === '/invoice-list' ? 'text-sky-300' : 'text-white'} />
              Invoice List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/container-inventory-stock"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/container-inventory-stock' ? 'text-sky-300' : 'text-white'
              }`}
            >
              <FaBox className={pathname === '/container-inventory-stock' ? 'text-sky-300' : 'text-white'} />
              Container Inventory Stock
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 