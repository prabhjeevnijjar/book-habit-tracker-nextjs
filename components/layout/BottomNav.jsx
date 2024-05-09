import bookIc from '../../public/static/images/book-icon.png';
import homeIc from '../../public/static/images/home-icon.png';
import profileIc from '../../public/static/images/profile-icon.png';
import searchIc from '../../public/static/images/search-icon.png';

const BottomNav = () => {
  return (
    <div className="top-0 w-[100%] h-14 shadow-lg rounded bottom-0">
      <h1 className="text-center pt-4 text-[20px] font-medium">
        <div className="flex flex-row justify-around">
          <img src={bookIc.src} className="w-[30px] h-[30px]" />
          <img src={homeIc.src} className="w-[37px] h-[30px]" />
          <img src={profileIc.src} className="w-[31px] h-[30px]" />
          <img src={searchIc.src} className="w-[32px] h-[30px]" />
        </div>
      </h1>
    </div>
  );
};

export default BottomNav;
