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
