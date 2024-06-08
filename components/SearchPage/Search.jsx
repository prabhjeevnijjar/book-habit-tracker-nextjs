'use client';

import { checkInputHandler } from '@/utils/utils';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { debounce } from 'lodash';

const Search = () => {
  const [searchVResults, setSearchResults] = useState('');
  const [results, setResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  async function search(q) {
    console.log(q);
    setIsLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_OPEN_LIBRARY_BASE_URL + `?q=${q.replace(' ', '+')}`);
      const body = await response.json();
      console.log(body?.docs);
      setResults(body?.docs);
      console.log({ results });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setSearchResults(await search(criteria));
    }, 300)
  ).current;

  async function handleChange(e) {
    debouncedSearch(e.target.value);
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  return (
    <Fragment>
      <form className="max-w-md mx-auto mt-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Books..."
            onKeyDown={(e) => checkInputHandler(e)}
            onChange={(e) => handleChange(e)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primaryPurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <Table className="mt-6">
        {isLoading ? <TableCaption>Loading...</TableCaption> : <TableCaption></TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>

            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>

            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default Search;
