"use client";
import { useState } from 'react';
import Layout from '../../components/layout';
import Modal from '../../components/modal';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiEdit, FiEye } from "react-icons/fi";
import InputField from '../../components/input-field';
import { LuPlus } from "react-icons/lu";

export default function ContainerInventoryStockList() {
  const dummyData = [
    { id: 1, containerNumber: "MSKU1234567", size: "20'", type: "Dry", importBLNumber: "BL123456789", polCode: "CNHKG", pod: "USLAX" },
    { id: 2, containerNumber: "TGHU7654321", size: "40'", type: "Reefer", importBLNumber: "BL987654321", polCode: "JPTYO", pod: "DEHAM" },
    { id: 3, containerNumber: "CAIU8912345", size: "20'", type: "Tank", importBLNumber: "BL567891234", polCode: "SGSIN", pod: "NLRTM" },
    { id: 4, containerNumber: "APHU6789123", size: "40'", type: "Flat Rack", importBLNumber: "BL345678912", polCode: "KRINC", pod: "FRLEH" },
    { id: 5, containerNumber: "NYKU2345678", size: "20'", type: "Open Top", importBLNumber: "BL912345678", polCode: "TWKHH", pod: "ITGIT" },
    { id: 6, containerNumber: "HLCU3456789", size: "40'", type: "Dry", importBLNumber: "BL678912345", polCode: "HKHKG", pod: "USNYC" },
    { id: 7, containerNumber: "OOCU4567890", size: "20'", type: "Reefer", importBLNumber: "BL456789123", polCode: "CNXMN", pod: "JPTYO" },
    { id: 8, containerNumber: "MSCU5678901", size: "40'", type: "Tank", importBLNumber: "BL234567891", polCode: "KRPUS", pod: "SGSIN" },
    { id: 9, containerNumber: "COSU6789012", size: "20'", type: "Flat Rack", importBLNumber: "BL891234567", polCode: "CNNGB", pod: "KRINC" },
    { id: 10, containerNumber: "EVEU7890123", size: "40'", type: "Open Top", importBLNumber: "BL789123456", polCode: "JPTYO", pod: "TWKHH" },
    { id: 11, containerNumber: "HMMU8901234", size: "20'", type: "Dry", importBLNumber: "BL123456780", polCode: "CNHKG", pod: "USLAX" },
    { id: 12, containerNumber: "YMLU9012345", size: "40'", type: "Reefer", importBLNumber: "BL234567809", polCode: "JPTYO", pod: "DEHAM" },
    { id: 13, containerNumber: "ONEU0123456", size: "20'", type: "Tank", importBLNumber: "BL345678912", polCode: "SGSIN", pod: "NLRTM" },
    { id: 14, containerNumber: "PILU1234506", size: "40'", type: "Flat Rack", importBLNumber: "BL456789123", polCode: "KRINC", pod: "FRLEH" },
    { id: 15, containerNumber: "WHLU2345607", size: "20'", type: "Open Top", importBLNumber: "BL567891234", polCode: "TWKHH", pod: "ITGIT" },
    { id: 16, containerNumber: "KMTC3456708", size: "40'", type: "Dry", importBLNumber: "BL678912345", polCode: "HKHKG", pod: "USNYC" },
    { id: 17, containerNumber: "ZIMU4567809", size: "20'", type: "Reefer", importBLNumber: "BL789123456", polCode: "CNXMN", pod: "JPTYO" },
    { id: 18, containerNumber: "UACU5678901", size: "40'", type: "Tank", importBLNumber: "BL891234567", polCode: "KRPUS", pod: "SGSIN" },
    { id: 19, containerNumber: "SITC6789012", size: "20'", type: "Flat Rack", importBLNumber: "BL901234567", polCode: "CNNGB", pod: "KRINC" },
    { id: 20, containerNumber: "IALU7890123", size: "40'", type: "Open Top", importBLNumber: "BL012345678", polCode: "JPTYO", pod: "TWKHH" },
    { id: 21, containerNumber: "ANLU8901234", size: "20'", type: "Dry", importBLNumber: "BL123456789", polCode: "CNHKG", pod: "USLAX" },
    { id: 22, containerNumber: "CPLU9012345", size: "40'", type: "Reefer", importBLNumber: "BL234567890", polCode: "JPTYO", pod: "DEHAM" },
    { id: 23, containerNumber: "EMCU0123456", size: "20'", type: "Tank", importBLNumber: "BL345678901", polCode: "SGSIN", pod: "NLRTM" },
    { id: 24, containerNumber: "GOLD1234567", size: "40'", type: "Flat Rack", importBLNumber: "BL456789012", polCode: "KRINC", pod: "FRLEH" },
    { id: 25, containerNumber: "HLCU2345678", size: "20'", type: "Open Top", importBLNumber: "BL567890123", polCode: "TWKHH", pod: "ITGIT" },
    { id: 26, containerNumber: "KMTU3456789", size: "40'", type: "Dry", importBLNumber: "BL678901234", polCode: "HKHKG", pod: "USNYC" },
    { id: 27, containerNumber: "MOLU4567890", size: "20'", type: "Reefer", importBLNumber: "BL789012345", polCode: "CNXMN", pod: "JPTYO" },
    { id: 28, containerNumber: "NYKU5678901", size: "40'", type: "Tank", importBLNumber: "BL890123456", polCode: "KRPUS", pod: "SGSIN" },
    { id: 29, containerNumber: "OOCU6789012", size: "20'", type: "Flat Rack", importBLNumber: "BL901234567", polCode: "CNNGB", pod: "KRINC" },
    { id: 30, containerNumber: "PILU7890123", size: "40'", type: "Open Top", importBLNumber: "BL012345678", polCode: "JPTYO", pod: "TWKHH" }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContainer, setCurrentContainer] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openViewModal = (container) => {
    setCurrentContainer(container);
    setIsViewModalOpen(true);
  };
  const closeViewModal = () => setIsViewModalOpen(false);

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

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);


  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-sky-500 border-l-8 pl-2.5">Container Inventory Stock List</h1>
          <div className='flex items-end flex-col'>

<div className='flex gap-2'>
            <button onClick={openModal3} className='bg-blue-500 hover:bg-blue-600 text-white rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>Yard Inventory Upload</button>
            <button className='bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>Create New <LuPlus /></button>
            <button onClick={openModal} className='bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Filter</h1><TiFilter />
            </button>
</div>


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

        {/* Filter Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className='h-full w-full relative'>
            <div className='absolute top-32 right-14'>
              <div className='flex justify-end'>
                <button onClick={closeModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'>
                  <RiArrowGoBackFill />
                </button>
              </div>
              <div className='bg-white rounded-xl my-4 p-4 grid grid-cols-3 lg:grid-cols-6 gap-2'>
                <InputField label="Container Number" id="containerNumber" placeholder="Enter container no." />
                <InputField label="Size" id="size" placeholder="Select size" />
                <InputField label="Type" id="type" placeholder="Select type" />
                <InputField label="Import B/L Number" id="blNumber" placeholder="Enter B/L no." />
                <InputField label="POL Code" id="polCode" placeholder="Enter POL code" />
                <InputField label="POD" id="pod" placeholder="Enter POD" />
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

        <Modal isOpen={isModalOpen3} onClose={closeModal3}>
                  <div className='h-full w-full relative'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-fit'>
                        <div className='flex w-full justify-end mb-4'>
                          <button onClick={closeModal3} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                            <RiArrowGoBackFill />
                          </button>
                        </div>
                        <div className='bg-white p-16 rounded-md flex items-center justify-center flex-col'>
                          <h1 className="text-xl font-semibold mb-4 text-green-600">Inventory reconciliation completed</h1>
                          <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
                            <h1>Update the Status</h1>
                          </button>
                          <h1 className="text-sm font-medium text-gray-600 mt-6">Mention if any new container added</h1>
                        </div>
                      </div>
                    </div>
                  </div>
          </Modal>
        

        {/* Table */}
        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Container Number</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Size</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Type</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Import B/L Number</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">POL Code</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">POD</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.containerNumber}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.size}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.importBLNumber}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.polCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.pod}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">
                    <div className="flex gap-2 justify-center">
                      <button 
                        className="p-1 rounded-full hover:bg-gray-200 text-blue-500"
                        onClick={() => openEditModal(item)}
                      >
                        <FiEdit />
                      </button>
                      <button 
                        className="p-1 rounded-full hover:bg-gray-200 text-blue-500"
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

        {/* View Modal */}
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
              <div className='w-[54rem]'>
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
        </Modal>
      </div>
    </Layout>
  );
}