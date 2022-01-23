import Link from 'next/link';
import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  active: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  const btnStyle = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <Link href="/#">
      <a data-filter="*" className={btnStyle}>
        {title}
      </a>
    </Link>
  );
}
