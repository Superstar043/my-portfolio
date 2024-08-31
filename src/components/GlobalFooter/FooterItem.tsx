import { FC } from 'react';
import Link from 'next/link';

interface FooterItemProps {
  text: string;
}

const FooterItem: FC<FooterItemProps> = ({ text }) => (
  <Link href="" className="text-md hover:underline">
    {text}
  </Link>
);

export default FooterItem;
