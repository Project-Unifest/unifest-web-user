import SchoolFestivalSelect from '@/widgets/SchoolFestivalSelect/ui/SchoolFestivalSelect';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <>
      <SchoolFestivalSelect />
      <SearchBar />
    </>
  );
};

export default IntroPage;
