export interface Response<T> {
  code: string;
  message: string;
  data: T;
}

export interface Festival {
  beginDate: string;
  endDate: string;
  festivalId: string;
  festivalName: string;
  latitude: number;
  longitude: number;
  region: string;
  schoolId: string;
  schoolName: string;
  thumbnail: string;
}

export interface TodayFestival {
  schoolId: string;
  schoolName: string;
  thumbnail: string;
  festivalId: string;
  festivalName: string;
  beginDate: string;
  endDate: string;
  starList: {
    starId: string;
    name: string;
    imgUrl: string;
  }[];
}

export interface Booth {
  id: string;
  name: string;
  category: string;
  description: string;
  thumbnail: string;
  location: string;
  latitude: number;
  longitude: number;
  enabled: boolean;
}
export interface BoothDetail extends Booth {
  warning: string;
  menus: {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
  }[];
}
