import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transactions'
    | 'ic-menu-card'
    | 'ic-menu-logout'
    | 'ic-menu-messages'
    | 'ic-menu-rewards'
    | 'ic-menu-settings';
  title: string;
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { icon, title, active, href = '/' } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
