import Image from 'next/image';
import React from 'react';
import DeleteIcon from '@/shared/assets/icon/delete_card.svg';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/AlertDialog/alert-dialog';
import WarningIcon from '@/shared/assets/icon/warning_icon.svg';
interface Props {
  imgSrc: string;
  schoolName: string;
  festivalName: string;
  date: string;
  isEditMode: boolean;
}
const SchoolCardEditor: React.FC<Props> = ({
  imgSrc,
  schoolName,
  festivalName,
  date,
  isEditMode,
}) => {
  return (
    <li className='flex cursor-pointer relative flex-col items-center gap-[2px] justify-center w-[113px] h-[121px] rounded-[10px] border-[1px] border-[#D9D9D9]'>
      <Image src={imgSrc} alt='schoolCard img' width={35} height={34} />
      <h1 className=' text-black font-medium mt-[6px] text-[13px]'>
        {schoolName}
      </h1>
      <h2 className='text-black font-bold text-xs'>{festivalName}</h2>
      <p className='text-[#979797] font-medium text-xs'>{date}</p>
      {isEditMode && (
        <AlertDialog>
          <AlertDialogTrigger>
            <div className='absolute right-[6px] top-[6px]'>
              <DeleteIcon />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className='w-full flex justify-center mb-[8px]'>
                <WarningIcon />
              </div>
              <AlertDialogTitle>관심 축제를 삭제합니다</AlertDialogTitle>
              <AlertDialogDescription>
                정말 삭제 하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>확인</AlertDialogAction>
              <AlertDialogCancel>취소</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </li>
  );
};

export default SchoolCardEditor;
