import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mt-16">
        <div className="flex justify-center">
          <Link href="/">아</Link>
          <Link href="/" className="ml-1">
            이
          </Link>
          <Link href="/" className="ml-1">
            콘
          </Link>
          <Link href="/" className="ml-1">
            들
          </Link>
        </div>
        <div className="flex justify-center">
          <div>© 2024</div>
          <div>&nbsp; • &nbsp;</div>
          <div>SeoYun Choi</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
