import { Fragment } from 'react';
import bookPlaceholder from '../../public/static/images/book-cover.jpg';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TopNav from '@/components/layout/TopNav';
import BottomNav from '@/components/layout/BottomNav';

const ExplorePage = () => {
  return (
    <Fragment>
      <TopNav />
      <div className=" flex justify-between mt-6 mx-3">
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">2018</SelectItem>
            <SelectItem value="dark">2019</SelectItem>
            <SelectItem value="system">2020</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Jan</SelectItem>
            <SelectItem value="dark">Feb</SelectItem>
            <SelectItem value="system">March</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" mt-6 ">
        <div className="flex justify-between mx-2">
          <div className="flex flex-col font-poppins text-[1.25rem] ">
            <span className="leading-[44px]">Today&apos;s Trending</span>
          </div>
          <span className="flex gap-1 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer text-[0.75rem]">View More</span>
        </div>
        <Carousel className="mt-4">
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className=" mt-6 ">
        <div className="flex justify-between mx-2">
          <div className="flex flex-col font-poppins text-[1.25rem] ">
            <span className="leading-[44px]">Monthly Trending</span>
          </div>
          <span className="flex gap-1 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer text-[0.75rem]">View More</span>
        </div>
        <Carousel className="mt-4">
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 pl-4">
              {' '}
              <div className="w-[162px] ">
                <img className="w-[162px] " src={bookPlaceholder.src} />
                <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
                <div className="flex gap-4  mt-3 align-center">
                  <span className="text-[0.75rem] font-inter">$199</span>
                  <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <BottomNav />
    </Fragment>
  );
};

export default ExplorePage;
