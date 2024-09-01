import { FC } from 'react';

import Link from 'next/link';

interface HeaderItemProps {
  text: string;
  href: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ text, href }) => (
  <Link
    className="font-semibold hover:-translate-y-1 transition-transform ease-in-out"
    href={href}
  >
    {text}
  </Link>
);

export default HeaderItem;
