import React from 'react';

const Statistics = () => {
  return (
    <div className='flex items-center justify-center w-full p-2 px-4 shadow-lg max-w-screen'>
<div className="flex items-center content-center justify-between p-4 lg:gap-3 bg-blue-50 rounded-2xl ">  
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-orange-600">79705</h2>
        <p className="text-xs">REGISTERED PANELLIST</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-orange-600">366</h2>
        <p className="text-xs">INCENTIVES IN APRIL</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-orange-600">2</h2>
        <p className="text-xs">MONTHLY SURVEYS</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-orange-600">716</h2>
        <p className="text-xs">COMPLETED SURVEYS</p>
      </div>
    </div>
    </div>
    
  );
};

export default Statistics;