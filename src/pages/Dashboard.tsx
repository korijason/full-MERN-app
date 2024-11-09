// Dashboard.jsx
import React from 'react';
import { useUser } from '@clerk/clerk-react';
import FinanceForm from '../components/FinanceForm';
import FinanceList from '../components/FinanceList';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h1 className='font-extrabold'>Welcome, {user?.firstName || 'User'}!</h1>
      {/* Display more user details as needed */}
      <h2 className='font-bold'>Here are your finance records.</h2>
      <FinanceForm />   
      <FinanceList />
    </div>
  );
};

export default Dashboard;
