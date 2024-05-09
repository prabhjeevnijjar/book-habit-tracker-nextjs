import FilterStats from '@/components/ActivityComp/FilterStats';
import Heatmap from '@/components/ActivityComp/Heatmap';
import SelectBooks from '@/components/ActivityComp/SelectBooks';
import Stats from '@/components/ActivityComp/Stats';
import BottomNav from '@/components/layout/BottomNav';
import TopNav from '@/components/layout/TopNav';
import { Fragment } from 'react';
// my activity pag
const HomePage = () => {
  return (
    <Fragment>
      <TopNav />
      <Stats />
      <FilterStats />
      <Heatmap />
      <SelectBooks />
      <BottomNav />
    </Fragment>
  );
};

export default HomePage;
