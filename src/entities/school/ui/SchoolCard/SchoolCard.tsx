import Image from 'next/image';
import React from 'react';
interface Props {
  imgSrc: string;
  schoolName: string;
  festivalName: string;
  date: string;
}
const SchoolCard: React.FC<Props> = ({
  imgSrc,
  schoolName,
  festivalName,
  date,
}) => {
  return (
    <div className='flex flex-col items-center gap-[2px] justify-center w-[113px] h-[121px]'>
      <Image src={imgSrc} alt='schoolCard img' width={35} height={34} />
      <h1 className=' text-black font-medium mt-[6px]'>{schoolName}</h1>
      <h2 className='text-black font-bold'>{festivalName}</h2>
      <p className='text-[#979797] font-medium'>{date}</p>
    </div>
  );
};

export default SchoolCard;
