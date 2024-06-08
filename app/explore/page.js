import { Fragment } from 'react';
import TopNav from '@/components/layout/TopNav';
import BottomNav from '@/components/layout/BottomNav';
import TodaysSuggestions from '@/components/ExplorePage/TodaysSuggestions';
import API from '../../endpoints.json';

const ExplorePage = async () => {
  const todaysData = await fetchTodays();

  return (
    <Fragment>
      <TopNav />
      {todaysData?.books?.map((item, index) => {
        return <TodaysSuggestions item={item} index={index} key={index} />;
      })}
      <BottomNav />
    </Fragment>
  );
};

const fetchTodays = async () => {
  const res = await fetch(`${process.env.NY_TIMES_BASE_URL + API.getTopFiveOverview}?api-key=${process.env.NY_TIMES_KEY}`);
  const data = await res.json();
  return { books: data.status === 'OK' ? data?.results?.lists : [] };
};

export default ExplorePage;
