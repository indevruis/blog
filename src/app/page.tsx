import Link from "next/link";

const Home = () => {
  return (
    <main className="w-[650px]">
      <div className="flex justify-between my-[10px] py-[10px]">
        <h1>최서윤&nbsp; ・&nbsp; indevruis</h1>
        <div className="pr-4">☾</div>
      </div>
      <article className="text-pretty mt-[10px] mb-[40px]">
        <p>여러 나라에서 코딩을 하며 다양한 경험을 하는 것을 좋아합니다.</p>
        <p>
          현재 Next.js, TypeScript, tailwindCSS로 블로그를 개발하고 있습니다.
        </p>
      </article>
      <div className="flex ">
        나의 기록
        <div className="ml-5">
          <div className="flex">
            <Link href="">Note</Link>
            <p className="ml-3">공유하고 싶은 기술들을 정리한 공간</p>
          </div>
          <div className="flex">
            <Link href="">Project</Link>
            <p className="ml-3">경험한 것을 정리한 공간</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
