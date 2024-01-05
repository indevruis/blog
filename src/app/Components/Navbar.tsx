import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-[650px] pt-[70px] flex justify-between">
      <div>
        <Link href="/">🖤</Link>
        <Link href="/" className="ml-7">
          Note
        </Link>
        <Link href="/" className="ml-7">
          Project
        </Link>
      </div>
      <div>
        <Link href="/">About</Link>
      </div>
    </header>
  );
};

export default Navbar;
