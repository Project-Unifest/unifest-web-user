import OnlyAppDialog from '@/widgets/OnlyAppDialog/ui/OnlyAppDialog';
import React from 'react';
import SettingIcon from '@/shared/assets/icon/setting_icon.svg';
import CallIcon from '@/shared/assets/icon/call_icon.svg';
import EtcIcon from '@/shared/assets/icon/etc_icon.svg';
import Image from 'next/image';
interface Props {}

const schoolArr: {
  imgSrc: string;
  schoolName: string;
  festivalName: string;
}[] = [{ imgSrc: '', schoolName: '건국대', festivalName: '녹색지대' }];
const MenuPage: React.FC<Props> = ({}) => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full px-[19px] py-[18px] rounded-b-2xl shadow-bottom bg-white'>
        <h1 className='font-semibold text-[20px] text-[#131316]'>메뉴</h1>
      </header>
      <main className='mt-[80px]'>
        <section className='border-b-[8px] border-b-[#F1F3F7] px-[19px] py-[18px]'>
          <div className='w-full flex justify-between'>
            <h1 className='font-bold text-[15px] text-[#131316] '>
              나의 관심학교
            </h1>
            <button className='underline font-semibold text-[11px] text-[#727276]'>
              추가하기{'>'}
            </button>
          </div>
          {schoolArr.length > 0 ? (
            <ul className='w-full flex flex-row flex-wrap gap-[34px] items-center pt-[25px]'>
              {schoolArr.map((dt, idx) => (
                <li className='flex flex-col gap-[15px]'>
                  <Image
                    src={dt.imgSrc}
                    alt={`관심학교 ${idx}`}
                    className='w-[63px] h-[60px] rounded-full'
                  />
                  <div>
                    <h1 className='font-medium text-[12px] text-[#727276]'>
                      {dt.schoolName}
                    </h1>
                    <h2 className='font-semibold text-[14px] text-[#131316]'>
                      {dt.festivalName}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className='w-full h-[210px] flex flex-col justify-center items-center gap-[9px]'>
              <h1 className='font-semibold text-[18px] text-black'>
                관심 학교 없음
              </h1>
              <p className='font-medium text-[13px] text-[#727276]'>
                관심 학교를 추가해주세요
              </p>
            </div>
          )}
        </section>
        <section className='border-b-[8px] border-b-[#F1F3F7] px-[19px] py-[18px]'>
          <div className='w-full flex justify-between'>
            <h1 className='font-bold text-[15px] text-[#131316] '>관심부스</h1>
            <div>
              <OnlyAppDialog>
                <button className='underline font-semibold text-[11px] text-[#727276]'>
                  더 보기{'>'}
                </button>
              </OnlyAppDialog>
            </div>
          </div>
          <div className='w-full h-[210px] flex flex-col justify-center items-center gap-[9px]'>
            <h1 className='font-semibold text-[18px] text-black'>
              관심 부스 없음
            </h1>
            <p className='font-medium text-[13px] text-[#727276]'>
              지도에서 관심있는 부스를 추가해주세요
            </p>
          </div>
        </section>
        <section className='mb-[20px]'>
          <ul>
            <li>
              <OnlyAppDialog>
                <div className='px-[26px] py-[24px] w-full flex flex-row gap-[19px] border-b border-b-[#E3E4EA] bg-white'>
                  <SettingIcon />
                  <h1>설정</h1>
                </div>
              </OnlyAppDialog>
            </li>
            <li>
              <OnlyAppDialog>
                <div className='px-[26px] py-[24px] w-full flex flex-row gap-[19px] border-b border-b-[#E3E4EA] bg-white'>
                  <CallIcon />
                  <h1>이용문의</h1>
                </div>
              </OnlyAppDialog>
            </li>
            <li>
              <OnlyAppDialog>
                <div className='px-[26px] py-[24px] w-full flex flex-row gap-[19px] border-b border-b-[#E3E4EA] bg-white'>
                  <EtcIcon />
                  <h1>운영자 모드 진입</h1>
                </div>
              </OnlyAppDialog>
            </li>
          </ul>
        </section>
        <div className='w-full flex justify-center pb-[80px]'>
          <p className='font-medium text-[13px] text-[#BABABF]'>
            UniFest v1.0.0
          </p>
        </div>
      </main>
    </>
  );
};

export default MenuPage;
