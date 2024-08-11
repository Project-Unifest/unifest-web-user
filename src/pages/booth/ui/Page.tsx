'use client';
import { axiosInstance } from '@/shared/store/instance';
import { BoothDetail, Response } from '@/shared/store/types/response';
import BoothBottomBar from '@/widgets/BoothBottomBar/ui/BoothBottomBar';
import BoothDescription from '@/widgets/BoothDescription/ui/BoothDescription';
import HeaderWithBackBtn from '@/widgets/HeaderWithBackBtn/ui/HeaderWithBackBtn';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface Props {
  id: string;
}

const BoothPage: React.FC<Props> = ({ id }: Props) => {
  console.log(id);

  const getFestivalBoothDetail = async (festivalId: string) => {
    const res = await axiosInstance.get(`/api/booths/${festivalId}`);
    const response: Response<BoothDetail> = res.data;
    return response;
  };

  const { data: boothDetailDataRes } = useQuery({
    queryKey: ['getFestivalBoothDetail', id],
    queryFn: () => getFestivalBoothDetail(id),
    enabled: !!id,
  });

  const boothDetailData = boothDetailDataRes?.data;

  console.log(boothDetailData);

  return (
    <>
      <HeaderWithBackBtn />
      <BoothDescription boothDetailData={boothDetailData} />
      <BoothBottomBar />
    </>
  );
};

export default BoothPage;
