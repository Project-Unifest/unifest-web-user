import Image from 'next/image';
import React from 'react';
import LocationIcon from '@/shared/assets/icon/map_icon.svg';
import TimeIcon from '@/shared/assets/icon/time_icon.svg';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';

import { Button } from '@/shared/ui/Button/button';
import {
  Tabs,
  TabsBlackTrigger,
  TabsContent,
  TabsFullList,
} from '@/shared/ui/Tabs/tabs';
interface Props {}

const foodArr: { name: string; imageSrc: string; price: string }[] = [
  { imageSrc: '', name: '모둠 사시미', price: '45,000원' },
];
const imgArr: string[] = ['', ''];

const BoothDescription: React.FC<Props> = ({}: Props) => {
  return (
    <section className='w-full border-b-[8px] border-b-[#F1F3F7]'>
      <Image src={''} className='w-full min-h-[260px]' alt='booth image' />
      <div className='w-full flex justify-center mt-[23px]'>
        <Tabs defaultValue={'주간부스'} className='w-full'>
          <TabsFullList>
            <TabsBlackTrigger value={'주간부스'}>{'주간부스'}</TabsBlackTrigger>
            <TabsBlackTrigger value={'야간부스'}>{'야간부스'}</TabsBlackTrigger>
          </TabsFullList>
          <TabsContent value={'주간부스'}>
            <>
              <div className='py-[30px] px-[20px]'>
                <div className='flex gap-[5px] items-center'>
                  <h1 className=' font-bold text-[22px] text-black'>
                    컴공 주점
                  </h1>
                  <h2 className='font-semibold text-[10px] text-[#F5687E]'>
                    컴퓨터공학부 전용 부스
                  </h2>
                </div>
                <p className='text-[#3D3D3D] font-normal text-[13px] pt-[15px] pb-[21px]'>
                  저희 주점은 일본 이자카야를 모티브로 만든 컴공인을 위한
                  주점입니다. 100번째 방문자에게 깜짝 선물 증정 이벤트를 하고
                  있으니 많은 관심 부탁드려요~!
                </p>
                <div className='flex items-center gap-[3px] pb-[11px]'>
                  <LocationIcon />
                  <p className='font-medium text-[13px] text-[#393939]'>
                    운영중
                  </p>
                  <ChevronDownIcon />
                </div>
                <div className='flex items-center gap-[3px] pb-[16px]'>
                  <TimeIcon />
                  <p className='font-medium text-[13px] text-[#393939]'>
                    청심대 앞
                  </p>
                </div>
                <Button variant={'outline'} size={'full_sm'}>
                  위치 확인하기
                </Button>
              </div>
              <div className='py-[22px] px-[20px]'>
                <h1 className='font-semibold text-[18px] text-black mb-[18px]'>
                  메뉴
                </h1>
                <ul>
                  {foodArr.length > 0 ? (
                    foodArr.map((dt, idx) => (
                      <li className='flex flex-row gap-[13px] items-center'>
                        <Image
                          src={dt.imageSrc}
                          className='w-[86px] h-[86px]'
                          alt={`food image ${idx}`}
                        />
                        <div className='flex flex-col h-[86px] justify-center items-start'>
                          <h2 className='font-semibold text-[14px] text-[#727276]'>
                            {dt.name}
                          </h2>
                          <h3 className='font-semibold text-[16px] text-[#131316]'>
                            {dt.price}
                          </h3>
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className='h-[145px] w-full flex justify-center items-center'>
                      <p className='font-normal text-[14px] text-[#727276]'>
                        등록된 메뉴가 없어요
                      </p>
                    </div>
                  )}
                </ul>
              </div>
              <div className='py-[22px] px-[20px]'>
                <h1 className='font-semibold text-[18px] text-black mb-[18px]'>
                  사진
                </h1>
                <ul className='w-full flex flex-row gap-[7px] flex-wrap pb-[120px]'>
                  {imgArr.map((dtSrc, idx) => (
                    <Image
                      src={dtSrc}
                      className='w-[113px] h-[113px]'
                      alt={`booth food image ${idx}`}
                    />
                  ))}
                </ul>
              </div>
            </>
          </TabsContent>
          <TabsContent value={'야간부스'}>
            <>ㅇㄴ</>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BoothDescription;
