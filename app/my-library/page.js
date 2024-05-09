import BottomNav from '@/components/layout/BottomNav';
import TopNav from '@/components/layout/TopNav';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react';
import AddIc from '../../public/static/images/addIc.png';
import toReadImg from '../../public/static/images/toReadImg.png';

export const metadata = {
  title: 'My library',
  description: 'All the book collections that I have saved',
};

const MyLibraryPage = () => {
  return (
    <Fragment>
      <TopNav />
      <div className="mx-4">
        <h1 className="text-2xl font-medium mt-4">Collection</h1>
        <div className="flex flex-row justify-start gap-2 mt-2">
          <Button>Add</Button>
          <Button variant="outline">Search</Button>
          <Button variant="outline">Activity</Button>
        </div>
        <div className="grid grid-cols-2 gap-6 my-6">
          <div className="border rounded bg-[#fafafa] w-[100%] h-[220px] flex flex-col justify-center items-center">
            <img src={AddIc.src} className="w-[60px] h-[74px]"></img>
            <p className="font-[18px] text-[#a8a8a8]">Add New</p>
          </div>
          <div className="border rounded bg-[#fafafa] w-[100%] h-[220px] flex flex-col">
            <div className="h-[150px] w-[100%]">
              <img src={toReadImg.src} className="w-[100%] h-[100%]"></img>
            </div>
            <div className="text-center flex justify-center text-md font-[#717171] p-2">To Read</div>
          </div>
          <div className="border rounded bg-[#fafafa] w-[100%] h-[220px] flex flex-col">
            <div className="h-[150px] w-[100%]">
              <img src={toReadImg.src} className="w-[100%] h-[100%]"></img>
            </div>
            <div className="text-center flex justify-center text-md font-[#717171] p-2">To Read</div>
          </div>{' '}
          <div className="border rounded bg-[#fafafa] w-[100%] h-[220px] flex flex-col">
            <div className="h-[150px] w-[100%]">
              <img src={toReadImg.src} className="w-[100%] h-[100%]"></img>
            </div>
            <div className="text-center flex justify-center text-md font-[#717171] p-2">To Read</div>
          </div>
          <div className="border rounded bg-[#fafafa] w-[100%] h-[220px] flex flex-col">
            <div className="h-[150px] w-[100%]">
              <img src={toReadImg.src} className="w-[100%] h-[100%]"></img>
            </div>
            <div className="text-center flex justify-center text-md font-[#717171] p-2">To Read</div>
          </div>
        </div>
      </div>
      <BottomNav />
    </Fragment>
  );
};

export default MyLibraryPage;
