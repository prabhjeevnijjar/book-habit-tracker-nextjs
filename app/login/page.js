import Image from 'next/image';
import bookshelfImg from '../../public/static/images/bookshelf.png';
import bookIc from '../../public/static/images/book-icon.png';
import homeIc from '../../public/static/images/home-icon.png';
import profileIc from '../../public/static/images/profile-icon.png';
import searchIc from '../../public/static/images/search-icon.png';

const LoginPage = () => {
  return (
    <div className="mx-auto content-center flex flex-col my-12">
      <Image src={bookshelfImg.src} width={335} height={252} className="mx-auto block" />
      <h1 className="text-3xl font-bold text-center mt-12"> Welcome to Reading Habit Tracker & Start tracking your reading journey</h1>
      <h2 className="text-center text-sm my-6"> Track your daily reading progress daily, never lose a page.</h2>
      <div className="flex flex-row mx-auto my-6">
        <img src={bookIc.src} className="h-[0.8rem]" />
        <img src={homeIc.src} className="h-[0.8rem]" />
        <img src={profileIc.src} className="h-[0.8rem]" />
        <img src={searchIc.src} className="h-[0.8rem]" />
      </div>
      <div className="flex flex-row place-content-around my-6 top-0">
        <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span className="text-slate-700">Login with Google</span>
        </button>
        <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          <span className="text-slate-700">Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
