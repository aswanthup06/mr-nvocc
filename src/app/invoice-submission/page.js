"use client";
import { useState } from 'react';
import Layout from '../../components/layout';
import InputField from '../../components/input-field';

export default function InvoiceSubmission() {
  const [formData, setFormData] = useState({
    invoiceNo: '',
    invoiceDate: '',
    surveyorYardName: '',
    monthOfInvoice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Invoice submitted successfully!');
  };

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-sky-500 border-l-8 pl-2.5">Invoice Submission</h1>
          
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="INVOICE NO"
                id="invoiceNo"
                name="invoiceNo"
                value={formData.invoiceNo}
                onChange={handleChange}
                placeholder="Enter invoice number"
                required
              />
              
              <InputField
                label="INVOICE DATE"
                id="invoiceDate"
                name="invoiceDate"
                type="date"
                value={formData.invoiceDate}
                onChange={handleChange}
                required
              />
              
              <InputField
                label="Surveyor/Yard Name"
                id="surveyorYardName"
                name="surveyorYardName"
                value={formData.surveyorYardName}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
              
              <InputField
                label="Month of Invoice"
                id="monthOfInvoice"
                name="monthOfInvoice"
                type="month"
                value={formData.monthOfInvoice}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white text-xs w-fit px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Upload Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}