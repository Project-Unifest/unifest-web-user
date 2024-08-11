import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/shared/ui/Drawer/drawer';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';
import SchoolFestivalInterestListEditor from '@/widgets/SchoolFestivalInterestListEditor/ui/SchoolFestivalInterestListEditor';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/button';
import {
  interestFestival,
  interestFestivalArrData,
} from '@/shared/store/types/festival';
import { axiosInstance } from '@/shared/store/instance';
import { Festival, Response } from '@/shared/store/types/response';
import { useQuery } from '@tanstack/react-query';
import CheckIcon from '@/shared/assets/icon/check.svg';
interface Props {
  changeMapToLocation: (lat: number, lng: number) => void;
}

const FestivalMapDrawer: React.FC<Props> = ({ changeMapToLocation }: Props) => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const [interestSchoolList, setInterestSchoolList] = useState<
    interestFestival[]
  >([]);
  useEffect(() => {
    const interestFestivalData = localStorage.getItem(
      'unifest-interest-festival'
    );
    if (interestFestivalData) {
      const data: interestFestivalArrData = JSON.parse(interestFestivalData);
      setInterestSchoolList(data.data);
    }
  }, []);

  const getFestivalBySchool = async (school: string) => {
    const res = await axiosInstance.get(`/festival?name=${school}`);
    const response: Response<Festival[]> = res.data;
    return response;
  };

  const [searchWord, setSearchWord] = useState('');

  const { data: searchData } = useQuery({
    queryKey: ['getFestivalBySchool', searchWord],
    queryFn: () => getFestivalBySchool(searchWord),
    enabled: !!searchWord,
  });

  const dateToDateFormat = (beginDate: string, endDate: string) => {
    const begin = new Date(beginDate);
    const end = new Date(endDate);
    const beginMonth = begin.getMonth() + 1;
    const beginDay = begin.getDate();
    const endMonth = end.getMonth() + 1;
    const endDay = end.getDate();
    const beginText =
      (beginMonth < 10 ? `0${beginMonth}` : `${beginMonth}`) +
      '.' +
      (beginDay < 10 ? `0${beginDay}` : `${beginDay}`);
    const endText =
      (endMonth < 10 ? `0${endMonth}` : `${endMonth}`) +
      '.' +
      (endDay < 10 ? `0${endDay}` : `${endDay}`);
    return beginText + '~' + endText;
  };

  const searchDataArr: interestFestival[] =
    searchData?.data.map((dt) => ({
      imgSrc: dt.thumbnail,
      schoolName: dt.schoolName,
      festivalName: dt.festivalName,
      date: dateToDateFormat(dt.beginDate, dt.endDate),
      festivalId: dt.festivalId,
      schoolId: dt.schoolId,
      lat: dt.latitude,
      lng: dt.longitude,
    })) || [];

  const [checkedInterestFestival, setCheckedInterestFestival] =
    useState<interestFestival>();

  return (
    <div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
          <div className='flex flex-row items-center gap-[6px]'>
            <p className='font-semibold text-[20px]'>
              {checkedInterestFestival
                ? checkedInterestFestival.schoolName
                : '학교를 선택해주세요'}
            </p>
            <ChevronDownIcon />
          </div>
        </DrawerTrigger>
        <DrawerContent className='z-50 bg-white p-0'>
          <DrawerHeader className='p-0'>
            <div className='h-[90vh]'>
              <div className='w-full  pt-[20px] pb-[38px]'>
                <div className='w-full px-[20px]'>
                  <SearchBar
                    onClickSearchBtn={(word: string) => {
                      if (word) {
                        setIsSearchMode(true);
                        setSearchWord(word);
                      }
                    }}
                    isBackBtn={isSearchMode}
                    onClickBackBtn={() => {
                      setIsSearchMode(false);
                    }}
                  />
                </div>
                {isSearchMode && (
                  <div>
                    {searchDataArr.length > 0 && (
                      <div className='pl-[21px] pt-[18px] w-full flex flex-row gap-[4px]'>
                        <p className='text-[12px] font-medium text-[#727276]'>
                          검색결과{' '}
                        </p>
                        <p className='text-[12px] font-medium text-[#131316]'>
                          총 {searchDataArr.length}개
                        </p>
                      </div>
                    )}
                    {searchDataArr.length > 0 ? (
                      <ul className='flex flex-col w-full'>
                        {searchDataArr.map((dt, idx) => (
                          <li
                            className={`w-full px-[24px] flex flex-row py-[15px] items-center justify-between ${idx !== 0 && 'border-t border-t-[#E3E4EA]'}`}
                          >
                            <div className='flex flex-row items-center gap-[8px]'>
                              <Image
                                src={dt.imgSrc}
                                alt={`search img ${idx}`}
                                className='w-[55px] h-[55px]'
                                width={55}
                                height={55}
                              />
                              <div className='flex flex-col gap-[3px] items-start'>
                                <h1 className='text-[13px] font-normal text-[#131316]'>
                                  {dt.schoolName}
                                </h1>
                                <h2 className='text-[12px] font-bold text-[#131316]'>
                                  {dt.festivalName}
                                </h2>
                                <p className='text-[12px] font-normal text-[#727276]'>
                                  {dt.date}
                                </p>
                              </div>
                            </div>
                            {interestSchoolList.length > 0 &&
                            !!interestSchoolList.find(
                              (x) =>
                                x.festivalId === dt.festivalId &&
                                x.schoolId === dt.schoolId
                            ) ? (
                              <Button
                                variant={'default'}
                                size={'sm'}
                                className='h-[29px] w-[57px] rounded-full'
                              >
                                <CheckIcon />
                              </Button>
                            ) : (
                              <Button
                                variant={'outline'}
                                size={'sm'}
                                className='h-[29px] w-[57px] rounded-full font-medium text-[12px]'
                                onClick={() => {
                                  if (interestSchoolList.length > 0) {
                                    if (
                                      !interestSchoolList.find(
                                        (x) =>
                                          x.festivalId === dt.festivalId &&
                                          x.schoolId === dt.schoolId
                                      )
                                    ) {
                                      const newData = {
                                        data: [
                                          ...interestSchoolList,
                                          { ...dt },
                                        ],
                                      };
                                      localStorage.setItem(
                                        'unifest-interest-festival',
                                        JSON.stringify(newData)
                                      );
                                      setInterestSchoolList([
                                        ...interestSchoolList,
                                        { ...dt },
                                      ]);
                                    }
                                  } else {
                                    const newData = { data: [dt] };
                                    localStorage.setItem(
                                      'unifest-interest-festival',
                                      JSON.stringify(newData)
                                    );
                                    setInterestSchoolList([{ ...dt }]);
                                  }
                                }}
                              >
                                추가
                              </Button>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className='h-[500px] flex justify-center items-center text-center text-[14px] font-normal text-[#727276]'>
                        검색 결과가 없어요
                      </div>
                    )}
                  </div>
                )}
              </div>
              {!isSearchMode && (
                <SchoolFestivalInterestListEditor
                  interestSchoolList={interestSchoolList}
                  setInterestSchoolList={setInterestSchoolList}
                  changeMapToLocation={changeMapToLocation}
                  setIsOpen={setIsOpen}
                  setCheckedInterestFestival={setCheckedInterestFestival}
                />
              )}
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FestivalMapDrawer;
