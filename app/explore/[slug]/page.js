import API from '../../../endpoints.json';
import moment from 'moment';
import Link from 'next/link';

export default async function Page({ params }) {
  const data = await fetchData(decodeURIComponent(params.slug));

  return (
    <div className="flex flex-col font-poppins  ">
      <Link href="/explore" type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:purplePrimary hover:text-white px-3">
        <div className="flex flex-row align-middle">
          <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">Back</p>
        </div>
      </Link>
      <span className="text-3xl font-semibold mt-6">
        <div> {decodeURIComponent(params.slug)}</div>
      </span>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {data?.books?.map((item, index) => {
          return (
            <div className="w-[162px] " key={index}>
              <img className="w-[162px] " src={item.book_image} />

              <div className="mt-2 font-inter font-semibold">{item.title}</div>
              <div className="flex gap-4  mt-3 align-center">
                <span className="text-[0.75rem] font-inter">{item.author}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const fetchData = async (slug) => {
  const today = moment();

  const formattedDate = today.format('YYYY-MM-DD');

  const res = await fetch(`${process.env.NY_TIMES_BASE_URL + API.getTrendingBookWithFilter + formattedDate + '/' + slug + '.json'}?api-key=${process.env.NY_TIMES_KEY}`);
  const data = await res.json();
  return { books: data.status === 'OK' ? data?.results?.books : [] };
};
