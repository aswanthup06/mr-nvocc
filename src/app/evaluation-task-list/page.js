"use client";
import { useState } from 'react';
import Layout from '../../components/layout';
import Modal from '../../components/modal';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiEdit, FiEye } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import InputField from '../../components/input-field';

export default function EvaluationTaskList() {
  const dummyData = [
    { id: 1, evaluationTaskId: "ET20230001", billOfLading: "BL123456789", containerNumber: "MSKU1234567", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 2, evaluationTaskId: "ET20230002", billOfLading: "BL987654321", containerNumber: "TGHU7654321", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 3, evaluationTaskId: "ET20230003", billOfLading: "BL567891234", containerNumber: "CAIU8912345", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 4, evaluationTaskId: "ET20230004", billOfLading: "BL345678912", containerNumber: "APHU6789123", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 5, evaluationTaskId: "ET20230005", billOfLading: "BL912345678", containerNumber: "NYKU2345678", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 6, evaluationTaskId: "ET20230006", billOfLading: "BL678912345", containerNumber: "HLCU3456789", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 7, evaluationTaskId: "ET20230007", billOfLading: "BL456789123", containerNumber: "OOCU4567890", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 8, evaluationTaskId: "ET20230008", billOfLading: "BL234567891", containerNumber: "MSCU5678901", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 9, evaluationTaskId: "ET20230009", billOfLading: "BL891234567", containerNumber: "COSU6789012", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 10, evaluationTaskId: "ET20230010", billOfLading: "BL789123456", containerNumber: "EVEU7890123", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 11, evaluationTaskId: "ET20230011", billOfLading: "BL123456780", containerNumber: "HMMU8901234", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 12, evaluationTaskId: "ET20230012", billOfLading: "BL234567809", containerNumber: "YMLU9012345", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 13, evaluationTaskId: "ET20230013", billOfLading: "BL345678901", containerNumber: "ONEU0123456", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 14, evaluationTaskId: "ET20230014", billOfLading: "BL456789012", containerNumber: "PILU1234506", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 15, evaluationTaskId: "ET20230015", billOfLading: "BL567890123", containerNumber: "WHLU2345607", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 16, evaluationTaskId: "ET20230016", billOfLading: "BL678901234", containerNumber: "KMTC3456708", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 17, evaluationTaskId: "ET20230017", billOfLading: "BL789012345", containerNumber: "ZIMU4567809", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 18, evaluationTaskId: "ET20230018", billOfLading: "BL890123456", containerNumber: "UACU5678901", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 19, evaluationTaskId: "ET20230019", billOfLading: "BL901234567", containerNumber: "SITC6789012", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 20, evaluationTaskId: "ET20230020", billOfLading: "BL012345678", containerNumber: "IALU7890123", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 21, evaluationTaskId: "ET20230021", billOfLading: "BL123456789", containerNumber: "ANLU8901234", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 22, evaluationTaskId: "ET20230022", billOfLading: "BL234567890", containerNumber: "CPLU9012345", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 23, evaluationTaskId: "ET20230023", billOfLading: "BL345678901", containerNumber: "EMCU0123456", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 24, evaluationTaskId: "ET20230024", billOfLading: "BL456789012", containerNumber: "GOLD1234567", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 25, evaluationTaskId: "ET20230025", billOfLading: "BL567890123", containerNumber: "HLCU2345678", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 26, evaluationTaskId: "ET20230026", billOfLading: "BL678901234", containerNumber: "KMTU3456789", evaluationStatus: "Pending Review", taskStatus: "In Progress" },
    { id: 27, evaluationTaskId: "ET20230027", billOfLading: "BL789012345", containerNumber: "MOLU4567890", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 28, evaluationTaskId: "ET20230028", billOfLading: "BL890123456", containerNumber: "NYKU5678901", evaluationStatus: "Rejected", taskStatus: "Pending" },
    { id: 29, evaluationTaskId: "ET20230029", billOfLading: "BL901234567", containerNumber: "OOCU6789012", evaluationStatus: "Approved", taskStatus: "Completed" },
    { id: 30, evaluationTaskId: "ET20230030", billOfLading: "BL012345678", containerNumber: "PILU7890123", evaluationStatus: "Pending Review", taskStatus: "In Progress" }
  ];

  const modalData = [
    { label: "Evaluation Task ID", value: "ET20230001" },
    { label: "Bill of Lading", value: "BL123456789" },
    { label: "Container Number", value: "MSKU1234567" },
    { label: "Evaluation Status", value: "Pending Review" },
    { label: "Task Status", value: "In Progress" },
    { label: "Created Date", value: "2023-10-01" },
    { label: "Assigned To", value: "John Doe" },
    { label: "Due Date", value: "2023-10-15" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const openModal4 = () => setIsModalOpen4(true);
  const closeModal4 = () => setIsModalOpen4(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openViewModal = (container) => {
    setCurrentContainer(container);
    setIsViewModalOpen(true);
  };
  const closeViewModal = () => setIsViewModalOpen(false);
  const [currentContainer, setCurrentContainer] = useState(null);

  const openEditModal = (container) => {
    setCurrentContainer(container);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const viewModalFields = [
    { label: "Container Number", value: currentContainer?.containerNumber || "N/A" },
    { label: "Size", value: currentContainer?.size || "N/A" },
    { label: "Type", value: currentContainer?.type || "N/A" },
    { label: "Import B/L Number", value: currentContainer?.importBLNumber || "N/A" },
    { label: "POL Code", value: currentContainer?.polCode || "N/A" },
    { label: "POD", value: currentContainer?.pod || "N/A" },
    { label: "Owner", value: "Maersk" },
    { label: "Status", value: "In Yard" },
    { label: "Arrival Date", value: "2023-10-15" },
    { label: "Departure Date", value: "2023-11-20" },
    { label: "Gross Weight", value: "28,500 kg" },
    { label: "Tare Weight", value: "2,200 kg" },
    { label: "Max Payload", value: "26,300 kg" },
    { label: "CSC Plate Expiry", value: "2025-06-30" },
    { label: "Last Survey Date", value: "2023-09-10" },
    { label: "Next Survey Due", value: "2024-09-10" },
    { label: "Location", value: "Yard A-12" },
    { label: "Seal Number", value: "SL12345678" },
    { label: "VGM", value: "30,700 kg" },
    { label: "Remarks", value: "No damage reported" }
  ];

  const editModalFields = [
    { label: "Container Number", id: "containerNumber", value: currentContainer?.containerNumber || "" },
    { label: "Size", id: "size", value: currentContainer?.size || "" },
    { label: "Type", id: "type", value: currentContainer?.type || "" },
    { label: "Import B/L Number", id: "importBLNumber", value: currentContainer?.importBLNumber || "" },
    { label: "POL Code", id: "polCode", value: currentContainer?.polCode || "" },
    { label: "POD", id: "pod", value: currentContainer?.pod || "" },
    { label: "Owner", id: "owner", value: "Maersk" },
    { label: "Status", id: "status", value: "In Yard" },
    { label: "Arrival Date", id: "arrivalDate", type: "date", value: "2023-10-15" },
    { label: "Departure Date", id: "departureDate", type: "date", value: "2023-11-20" },
    { label: "Gross Weight", id: "grossWeight", value: "28,500 kg" },
    { label: "Tare Weight", id: "tareWeight", value: "2,200 kg" },
    { label: "Max Payload", id: "maxPayload", value: "26,300 kg" },
    { label: "CSC Plate Expiry", id: "cscExpiry", type: "date", value: "2025-06-30" },
    { label: "Last Survey Date", id: "lastSurvey", type: "date", value: "2023-09-10" },
    { label: "Next Survey Due", id: "nextSurvey", type: "date", value: "2024-09-10" },
    { label: "Location", id: "location", value: "Yard A-12" },
    { label: "Seal Number", id: "sealNumber", value: "SL12345678" },
    { label: "VGM", id: "vgm", value: "30,700 kg" },
    { label: "Remarks", id: "remarks", value: "No damage reported" }
  ];

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-sky-500 border-l-8 pl-2.5">Evaluation Task List</h1>
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
                <InputField label="Evaluation Task ID" id="evalTaskId" placeholder="Enter task ID" />
                <InputField label="Bill of Lading" id="billOfLading" placeholder="Enter B/L number" />
                <InputField label="Container Number" id="containerNumber" placeholder="Enter container no." />
                <InputField label="Evaluation Status" id="evalStatus" placeholder="Select status" />
                <InputField label="Task Status" id="taskStatus" placeholder="Select status" />
                <InputField label="Date Range" id="dateRange" placeholder="Select date range" />
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
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Evaluation Task ID</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Bill of Lading</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Container Number</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Evaluation Status</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Task Status</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.evaluationTaskId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.billOfLading}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.containerNumber}</td>
                  <td className={`px-4 py-2 text-sm border-t border-gray-200 text-center ${
                    item.evaluationStatus === "Approved" ? "text-green-600" : 
                    item.evaluationStatus === "Rejected" ? "text-red-600" : "text-yellow-600"
                  }`}>
                    {item.evaluationStatus}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.taskStatus}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">
                    <div className="flex gap-2 justify-center">
                      <button className="p-1 rounded-full hover:bg-gray-200 text-blue-500 cursor-pointer"
                      onClick={() => openEditModal(item)}>
                        <FiEdit />
                      </button>
                      <button onClick={openModal4}  className="p-1 rounded-full hover:bg-gray-200 text-blue-500 cursor-pointer">
                        <FaCheck />
                      </button>
                      <button 
                        className="p-1 rounded-full hover:bg-gray-200 text-blue-500 cursor-pointer"
                        onClick={() => openViewModal(item)}
                      >
                        <FiEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <Modal isOpen={isModalOpen2} onClose={closeModal2}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeModal2} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-2'>
                  <div className='grid grid-cols-2 gap-4'>
                    {modalData.map((item, index) => (
                      <div key={index} className='border p-2 border-gray-300'>
                        <h1 className='text-sm font-bold text-neutral-700'>{item.label}</h1>
                        <h1 className='text-sm mt-1 text-neutral-700'>{item.value}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal> */}

        <Modal isOpen={isModalOpen4} onClose={closeModal4}>
            <div className="h-full w-full relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="w-[34rem]">
                  <div className="flex w-full justify-end mb-4">
                    <button
                      onClick={closeModal4}
                      className="bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"
                    >
                      <RiArrowGoBackFill />
                    </button>
                  </div>
                  <div className="bg-white p-6 rounded-md flex flex-col gap-2">
                    <h1 className="font-semibold">Approve Mail</h1>
                    <InputField label="From" id="from" placeholder="Enter sender" />
                    <InputField label="To" id="to" placeholder="Enter recipient" />
                    <div>
                      <label
                        htmlFor="mail"
                        className="block mb-2 text-sm font-semibold text-gray-800"
                      >
                        Mail
                      </label>
                      <textarea
                        id="mail"
                        maxLength={500}
                        className="duration-500 h-34 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        placeholder="Enter mail content"
                        required
                      />
                    </div>
                    <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
                      Approve
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

            <Modal isOpen={isViewModalOpen} onClose={closeViewModal}>
                    <div className='h-full w-full relative'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-[54rem]'>
                          <div className='flex w-full justify-end mb-2'>
                            <button onClick={closeViewModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                              <RiArrowGoBackFill />
                            </button>
                          </div>
                          <div className='bg-white p-6 rounded-md flex flex-col gap-2 h-[80vh] overflow-y-auto custom-scrollbar2'>
                            <div className='grid grid-cols-2 gap-4'>
                              {viewModalFields.map((field, index) => (
                                <div key={index} className='border p-2 border-gray-300'>
                                  <h1 className='text-sm font-bold text-neutral-700'>{field.label}</h1>
                                  <h1 className='text-sm mt-1 text-neutral-700'>{field.value}</h1>
                                </div>
                              ))}
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
              <div className='w-[64rem]'>
                <div className='flex w-full justify-end mb-2'>
                  <button onClick={closeEditModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-2 h-[80vh] overflow-y-auto custom-scrollbar2'>

                  <div className='grid grid-cols-2 gap-x-6 gap-y-1'>
                    {editModalFields.map((field, index) => (
                      <InputField
                        key={index}
                        label={field.label}
                        id={field.id}
                        type={field.type || "text"}
                        value={field.value}
                        onChange={() => {}}
                      />
                    ))}

                  </div>

                  <div className='grid grid-cols-2 gap-x-6 gap-y-1'>
<div className='mt-4'>
  <h1>Container image(At the time of Evaluation)</h1>
  <button className='bg-blue-500 text-white w-full py-3 rounded-md'>View</button>
  <div className='mt-6'>
  <h1>Container image(At the time of Evaluation)</h1>
  <div className='flex justify-between items-center border-y border-y-gray-300 py-2'>
    <h1 className='text-xs font-light text-gray-700'>File Name 1</h1>
    <div className='flex gap-2'>
      <button className='py-2 px-3 bg-blue-100 text-blue-800 rounded-full text-xs font-light'>View</button>
      <button className='py-2 px-3 bg-blue-500 text-white rounded-full text-xs font-light'>Revisit Estimation</button>
    </div>
  </div>
  <div className='flex justify-between items-center  py-2'>
    <h1 className='text-xs font-light text-gray-700'>File Name 1</h1>
    <div className='flex gap-2'>
      <button className='py-2 px-3 bg-blue-100 text-blue-800 rounded-full text-xs font-light'>View</button>
      <button className='py-2 px-3 bg-blue-500 text-white rounded-full text-xs font-light'>Revisit Estimation</button>
    </div>
  </div>
  <div className='flex justify-between items-center border-y border-y-gray-300 py-2'>
    <h1 className='text-xs font-light text-gray-700'>File Name 1</h1>
    <div className='flex gap-2'>
      <button className='py-2 px-3 bg-blue-100 text-blue-800 rounded-full text-xs font-light'>View</button>
      <button className='py-2 px-3 bg-blue-500 text-white rounded-full text-xs font-light'>Revisit Estimation</button>
    </div>
  </div>
  </div>
  </div> 
  
  <div className='mt-4'>
  <h1>Container image(After Repair Work)</h1>
  <button className='bg-blue-500 text-white w-full py-3 rounded-md'>View</button>
  <div className="flex justify-end mt-4 gap-2">
                    <button 
                      className="bg-white border border-gray-300 text-sm px-4 py-2 rounded-se-lg rounded-es-lg mr-2 hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer"
                      onClick={closeEditModal}
                    >
                      Cancel
                    </button>
                    <button 
                      className="bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer"
                      onClick={closeEditModal}
                    >
                      Save
                    </button>
                  </div>
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