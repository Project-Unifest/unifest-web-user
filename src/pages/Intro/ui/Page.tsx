import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <div>
      <div className='pt-[78px] pb-[52px] w-full flex-col items-center justify-center'>
        <h1 className='text-black font-semibold'>
          관심있는 학교 축제를 추가해보세요
        </h1>
        <p className='text-[#848484] font-medium'>
          관심 학교는 언제든지 수정 가능합니다
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
