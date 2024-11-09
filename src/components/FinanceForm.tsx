import React from 'react'

export default function FinanceForm() {
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();}
    return (
        <div className="form-container bg-gradient-to-t from-gray-700 to-white h-64 w-full p-8 rounded-xl shadow-md m-8 flex flex-col items-center">
          <form onSubmit={handleSubmit} >
            <div className="form-field">

              <label className='mr-4 font-bold'>Description:</label>
              <input
  
                type="text"
                required
                className="input mb-4 rounded-lg text-black border border-black"
                value='value'
                onChange={(e) => setDescription(e.target.value)}
               />
            </div>
            <div className="form-field">
              <label className='mr-4 font-bold'>Amount:</label>
              <input
                type="number"
                required
                className="input mb-4 rounded-lg text-black border border-black"
                value='value'
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className='mr-4 font-bold'>Category:</label>
              <select
                required
                className="input mb-4 rounded-lg text-black border border-black"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label className='mr-4 font-bold'>Payment Method:</label>
              <select
                required
                className="input mb-4 rounded-lg text-black border border-black"
               // value={paymentMethod}
               // onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select a Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            <button type="submit" className="button bg-gradient-to-r from-gray-800 to-slate-100 font-extrabold text-white rounded-lg p-2 w-full mt-4">
              Add Record
            </button>
          </form>
        </div>
      );
    };

