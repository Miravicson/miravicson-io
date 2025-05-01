import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import DownArrow from './Icons/DownArrow';

interface Props {
  path: string;
  name: string;
}

function NavLink({ path, name }: Props): ReactElement {
  const router = useRouter();
  let normalizedPath = path.replace('/', '');
  normalizedPath = `/${normalizedPath}`;

  const isPathActive = router.asPath === normalizedPath;

  return (
    <Link href={normalizedPath} className={`text-base select-none  ${
      isPathActive
        ? 'text-gray-800 font-bold dark:text-gray-400'
        : 'text-gray-600 dark:text-gray-300 font-normal '
    }`}>
        {name} {isPathActive && <DownArrow />}
    </Link>
  );
}

export default NavLink;
