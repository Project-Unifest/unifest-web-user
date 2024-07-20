import React from 'react';

const SchoolFestivalSelect: React.FC = () => {
  return (
    <div>
      <div className='pt-[78px] pb-[52px] w-full flex flex-col items-center justify-center gap-[9px]'>
        <h1 className='text-lg text-black font-semibold w-fit'>
          관심있는 학교 축제를 추가해보세요
        </h1>
        <p className='text-xs text-[#848484] font-medium w-fit'>
          관심 학교는 언제든지 수정 가능합니다
        </p>
      </div>
    </div>
  );
};

export default SchoolFestivalSelect;
