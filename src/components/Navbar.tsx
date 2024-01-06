import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-[650px] pt-[70px] my-[10px] py-[10px] flex justify-between">
      <div>
        <Link href="/">🖤</Link>
        <Link href="/note" className="ml-7">
          Note
        </Link>
        <Link href="/project" className="ml-7">
          Project
        </Link>
      </div>
      <div className="flex">
        <Link href="/about">About</Link>
        <div className="pl-7 pr-4">☾</div>
      </div>
    </header>
  );
};

export default Navbar;
