'use client';

import { usePathname } from 'next/navigation';

const TopNav = () => {
  const pathname = usePathname();

  return (
    <div className="top-0 w-[100%] h-14 shadow-lg  bg-white border border-gray-200 rounded-lg">
      <h1 className="text-center pt-4 text-[20px] font-medium">{pathname === '/my-library' ? 'My Library' : 'Activity Log'}</h1>
    </div>
  );
};
export default TopNav;
