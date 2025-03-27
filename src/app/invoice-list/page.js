"use client";
import { useState } from 'react';
import Layout from '../../components/layout';
import Modal from '../../components/modal';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from '../../components/input-field';

export default function InvoiceList() {
  const dummyInvoiceData = [
    { 
      id: 1, 
      invoiceNo: "INV20230001", 
      invoiceDate: "2023-10-01", 
      surveyorYardName: "ABC Surveyors Ltd.", 
      motionOfInvoice: "Survey Charges" 
    },

    { 
      id: 2, 
      invoiceNo: "INV20230001", 
      invoiceDate: "2023-10-01", 
      surveyorYardName: "ABC Surveyors Ltd.", 
      motionOfInvoice: "Survey Charges" 
    },
    
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const openViewModal = () => setIsViewModalOpen(true);
  const closeViewModal = () => setIsViewModalOpen(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const [currentInvoice, setCurrentInvoice] = useState(null);

  const handleViewClick = (invoice) => {
    setCurrentInvoice(invoice);
    openViewModal();
  };

  const handleEditClick = (invoice) => {
    setCurrentInvoice(invoice);
    openEditModal();
  };

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
      <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-sky-500 border-l-8 pl-2.5">Invoice List</h1>
          <div className='flex items-end flex-col'>
            <button onClick={openModal} className='bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Filter</h1><TiFilter />
            </button>
            <div className='flex gap-0.5 my-2'>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><IoIosArrowBack /></button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>1</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>2</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>3</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>4</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>5</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><IoIosArrowForward /></button>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className='h-full w-full relative'>
            <div className='absolute top-32 right-14'>
              <div className='flex justify-end'>
                <button onClick={closeModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'>
                  <RiArrowGoBackFill />
                </button>
              </div>
              <div className='bg-white rounded-xl my-4 p-4 grid grid-cols-3 lg:grid-cols-6 gap-2'>
                <InputField label="Invoice Number" id="invoiceNo" placeholder="Enter invoice no." />
                <InputField label="Surveyor/Yard Name" id="surveyorName" placeholder="Enter name" />
                <InputField label="Motion of Invoice" id="motion" placeholder="Select motion" />
                <InputField label="Date Range" id="dateRange" placeholder="Select date range" />
                <InputField label="Payment Status" id="paymentStatus" placeholder="Select status" />
              </div>
              <div className='flex justify-end'>
                <button className='bg-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg mr-2 hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
                  Reset
                </button>
                <button className='bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Invoice No</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Invoice Date</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Surveyor/Yard Name</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Motion of Invoice</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyInvoiceData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.invoiceNo}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.invoiceDate}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.surveyorYardName}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.motionOfInvoice}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">
                    <div className="flex gap-2 justify-center">
                      <button 
                        className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm"
                        onClick={() => handleViewClick(item)}
                      >
                        View
                      </button>
                      <button 
                        className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button className="border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                        Upload Payment Advice
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Modal */}
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeViewModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-2'>
                  <h2 className="text-lg font-semibold mb-4">Invoice Details</h2>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Invoice Number</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>{currentInvoice?.invoiceNo}</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Invoice Date</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>{currentInvoice?.invoiceDate}</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Surveyor/Yard Name</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>{currentInvoice?.surveyorYardName}</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Motion of Invoice</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>{currentInvoice?.motionOfInvoice}</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Amount</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>$1,250.00</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Tax</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>$125.00</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Total Amount</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>$1,375.00</h1>
                    </div>
                    <div className='border p-2 border-gray-300'>
                      <h1 className='text-sm font-bold text-neutral-700'>Payment Status</h1>
                      <h1 className='text-sm mt-1 text-neutral-700'>Pending</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Edit Modal */}
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeEditModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-2'>
                  <h2 className="text-lg font-semibold mb-4">Edit Invoice</h2>
                  <div className='grid grid-cols-2 gap-x-4'>
                    <InputField 
                      label="Invoice Number" 
                      id="editInvoiceNo" 
                      value={currentInvoice?.invoiceNo || ''}
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Invoice Date" 
                      id="editInvoiceDate" 
                      type="date"
                      value={currentInvoice?.invoiceDate || ''}
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Surveyor/Yard Name" 
                      id="editSurveyorName" 
                      value={currentInvoice?.surveyorYardName || ''}
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Motion of Invoice" 
                      id="editMotion" 
                      value={currentInvoice?.motionOfInvoice || ''}
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Amount" 
                      id="editAmount" 
                      type="number"
                      value="$1,250.00"
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Tax" 
                      id="editTax" 
                      type="number"
                      value="$125.00"
                      onChange={() => {}}
                    />
                    <InputField 
                      label="Total Amount" 
                      id="editTotalAmount" 
                      type="number"
                      value="$1,375.00"
                      onChange={() => {}}
                    />
                  <div className='flex justify-end mt-4'>
                <button className='bg-white text-sm px-6 h-10  rounded-se-lg rounded-es-lg mr-2 hover:bg-gray-200 transition-colors duration-200 cursor-pointer border border-gray-300 '>
                  Reset
                </button>
                <button className='bg-blue-500 text-white text-sm px-6 h-10 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer'>
                  Search
                </button>
              </div>
                  </div>
         
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}