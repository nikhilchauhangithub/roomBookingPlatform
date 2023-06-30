'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbMountain } from 'react-icons/tb';
import { RiSailboatLine } from 'react-icons/ri';
import { GrYoga } from 'react-icons/gr';

import { GiCampingTent } from 'react-icons/gi';

import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from '../CategoryBox';
import Container from '../Container';

export const categories = [
  {
    label: 'Yoga',
    icon: GrYoga,
    description: 'This property is a Yoga School',
  },
  {
    label: 'Camps',
    icon: GiCampingTent,
    description: 'This property is a Camp',
  },
  {
    label: 'Hotel',
    icon: MdOutlineVilla,
    description: 'This property is a Hotel',
  },
  {
    label: 'Full Day Healing',
    icon: RiSailboatLine,
    description: 'Full day healing',
  },
  {
    label: 'Trekking',
    icon: TbMountain,
    description: 'This property is a Trekking Service',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
