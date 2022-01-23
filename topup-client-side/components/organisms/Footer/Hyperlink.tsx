import Link from 'next/link';

interface HyperlinkProps {
  title: string;
}

export default function Hyperlink(props: HyperlinkProps) {
  const { title } = props;

  return (
    <li className="mb-6">
      <Link href="/#">
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
