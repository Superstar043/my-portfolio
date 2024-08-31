import { FC } from 'react';

interface HeaderItemProps {
  text: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ text }) => (
  <div className="font-semibold">{text}</div>
);

export default HeaderItem;
