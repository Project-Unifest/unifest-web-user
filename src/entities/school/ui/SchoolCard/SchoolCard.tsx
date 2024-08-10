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
    <li className='flex cursor-pointer flex-col items-center gap-[2px] justify-center w-[113px] h-[121px] rounded-[10px] border-[1px] border-[#D9D9D9]'>
      <Image src={imgSrc} alt='schoolCard img' width={35} height={34} />
      <h1 className=' text-[#131316] font-medium mt-[6px] text-[13px]'>
        {schoolName}
      </h1>
      <h2 className='text-[#[#131316]] font-bold text-[12px]'>
        {festivalName}
      </h2>
      <p className='text-[#979797] font-medium text-[12px]'>{date}</p>
    </li>
  );
};

export default SchoolCard;
