import Image from 'next/image';
import bookshelfImg from '../public/static/images/bookshelf.png';

const WelcomeComp = () => {
  <Image src={bookshelfImg.src} />;
};

export default WelcomeComp;
