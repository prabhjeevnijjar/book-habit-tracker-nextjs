import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';

const TodaysSuggestions = ({ item, index }) => {
  return (
    <div className=" mt-6 ">
      <div className="flex justify-between mx-2">
        <div className="flex flex-col font-poppins text-[1.25rem] ">
          <span className="leading-[44px] font-semibold">{item.display_name}</span>
        </div>
        <Link href={`/explore/${encodeURIComponent(item.list_name)}`}>
          <span className="flex gap-1 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer text-[0.75rem]">View More</span>
        </Link>
      </div>
      <Carousel className="mt-4">
        <CarouselContent className="-ml-4">
          {item.books.map((item, indexin) => {
            return (
              <CarouselItem className="basis-1/2 pl-4" key={indexin}>
                <div className="w-[162px] ">
                  <img className="w-[162px] " src={item.book_image} />

                  <div className="mt-2 font-inter font-semibold">{item.title}</div>
                  <div className="flex gap-4  mt-3 align-center">
                    <span className="text-[0.75rem] font-inter">{item.author}</span>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TodaysSuggestions;
