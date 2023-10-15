"use client"
import AdminNavbar from '../../../components/AdminNavbar';
import React, { useEffect, useState } from 'react';
import TableRow from '../../../components/TableRow';
import Link from 'next/link';

const Leads = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const[loading,setLoading]=useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/leads/`, {
        cache: 'no-cache',
      });
      const res = await response.json();
      if (res) {
        setLoading(false)
        setOriginalData(res);
        setFilteredData(res);
        return true;
      }
    } catch (err) {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
   

    const filtered = originalData.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(term)
      )
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <AdminNavbar />

      <div className='flex flex-col items-center justify-center gap-20 p-10'>
        <div className='w-[100%] flex items-center justify-between'>
          <Link
            href='/admin/leads/add'
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          >
            Add Users
          </Link>
          <div className='flex gap-4 items-center justify-center'>
            <input
              type='text'
              onChange={handleSearch}
              className='p-4 border-gray-300 border-2 focus:outline-none rounded-lg'
              placeholder='Search'
            />
            <input
              type='date'
              onChange={handleSearch}
              className='p-4 border-gray-300 border-2 focus:outline-none rounded-lg'
              placeholder='write'
            />
          </div>
        </div>

        <table className='min-w-full bg-white border border-gray-300 shadow-md'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Full Name</th>
              <th className='py-2 px-4 border-b'>Email</th>
              <th className='py-2 px-4 border-b'>Phone</th>
              <th className='py-2 px-4 border-b'>Address</th>
              <th className='py-2 px-4 border-b'>Created At</th>
              <th className='py-2 px-4 border-b'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length >= 1 ? (
              filteredData.map((value, i) => (
                <TableRow key={i} value={value} index={i + 1} />
              ))
            ) : (
             null
            )}
          </tbody>
        </table>
      {loading && (
      <div className='w-[100%] flex items-center justify-center'> 
      <img src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e477j2za21j8ojm8eehd698tbjr1qk79lfe87wd17o1&ep=v1_gifs_search&rid=giphy.gif&ct=g' className='w-[150px] h-[150px]' />
      </div>
      )}  
      </div>
    </>
  );
};

export default Leads;
