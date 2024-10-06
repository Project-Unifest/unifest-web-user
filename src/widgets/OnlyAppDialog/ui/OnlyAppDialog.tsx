import { Button } from "@/shared/ui/Button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/shared/ui/Dialog/dialog";
import LogoImg from "@/shared/assets/img/logo.png";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OnlyAppDialog: React.FC<Props> = ({ children }: Props) => {
  const handleNavigateToAppPage = () => {
    const userAgent = navigator.userAgent;

    // iOS 감지
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/kr/app/%EC%9C%A0%EB%8B%88%ED%8E%98%EC%8A%A4/id6502256367"; // iOS 앱스토어 링크
    }
    // 안드로이드 감지
    else if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.unifest.android&hl=ko"; // 안드로이드 스토어 링크
    }
    // 데스크탑이나 다른 플랫폼인 경우 (원하는 동작 설정)
    else {
      // 예를 들어 데스크탑 사용자의 경우 홈페이지를 유지할 수 있습니다.
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.unifest.android&hl=ko";
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full h-full">{children}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center">
          <Image
            src={LogoImg}
            alt="dialog logo img"
            className="w-[142px] h-[147px] mb-[15px]"
          />
          <h1 className="font-semibold text-[18px] text-black mb-[15px]">
            해당 기능은 앱에서만 사용 가능해요
          </h1>
          <p className="text-center font-normal text-[14px] text-[#727276] mb-[32px]">
            유니페스 모바일앱을 설치하고 더욱 다양한 축제 기능들을 만나보세요!
          </p>
          <Button onClick={handleNavigateToAppPage}>앱 설치하러 가기</Button>
        </div>
        <DialogClose className="absolute bottom-[-40px] w-full flex justify-center items-center">
          <p className="font-medium text-[14px] text-[#BABABF] underline">
            괜찮아요. 모바일웹으로 볼게요.
          </p>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default OnlyAppDialog;
