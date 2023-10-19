"use client"
import AdminNavbar from '../../../../components/AdminNavbar';
import React, { useEffect, useState } from 'react';
import TableRow from '../../../../components/TableRow';
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
        <div className='flex flex-col gap-4 items-center justify-center sm:flex sm:flex-row sm:items-center sm:justify-between sm:w-[100%]'>
          <Link
            href='/admin/leads/add'
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2  outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          >
            Add Users
          </Link>
          <div className='flex gap-2 items-center justify-center sm:gap-4' >
            <input
              type='text'
              onChange={handleSearch}
              className='p-1 border-gray-300 border-2 focus:outline-none rounded-lg sm:p-4'
              placeholder='Search'
            />
            <input
              type='date'
              onChange={handleSearch}
              className='p-1 border-gray-300 border-2 focus:outline-none rounded-lg sm:p-4'
              placeholder='write'
            />
          </div>
        </div>
       
        <div className="max-h-[400px] w-[100%] overflow-y-auto">
          <table className="w-[100%]  bg-white border border-gray-300">
            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className=" border-b">Id</th>
                <th className="border-b">Name</th>
                <th className=" border-b">Email</th>
                <th className="hidden  sm:table-cell px-4 py-2 border-b">Phone</th>
                <th className="hidden  sm:table-cell px-4 py-2 border-b">CreatedAt</th>
                <th className=" border-b">Buttons</th>
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
        </div>

        </div>
      {loading && (
      <div className='w-[100%] flex items-center justify-center'> 
      <img src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e477j2za21j8ojm8eehd698tbjr1qk79lfe87wd17o1&ep=v1_gifs_search&rid=giphy.gif&ct=g' className='w-[150px] h-[150px]' />
      </div>
      )}  

    </>
  );
};

export default Leads;

