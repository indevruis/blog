import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'

const About = () => {
  return (
    <div className="mt-5 flex">
      <div className="mt-2">
        <Image
          src="/images/profile.jpg"
          width={400}
          height={400}
          alt="프로필 이미지"
          className="rounded-full"
        />
        <div className="mt-5 flex flex-col">
          <span>최서윤 ・ indevruis</span>
          <p>Frontend Developer</p>
          <div className="flex items-center">
            <CiLocationOn size="22" />
            <p className="ml-2">Busan, South Korea</p>
          </div>
        </div>
      </div>
      <div className="ml-7">
        <h1 className="font-semibold">
          Frontend Engineer가 되고 싶은 개발 꿈나무입니다.
        </h1>
        <p>
          기술을 깊게 공부하는 것도 좋지만 먼저 경험해 보는 것이 좋다고 생각하여
          다양한 것을 간단하게 만들고 있습니다.
        </p>
        <p>
          T자형 개발자가 되기 위해 프런트 외의 다른 분야도 얕게나마 공부하고
          있습니다.
        </p>
        <h1 className="font-semibold mt-5">저는</h1>
        <p>후회를 반복하지 않는 것이 가장 중요하다고 생각합니다.</p>
        <p>
          잘하는 사람이 되기보단 꾸준히 자랄 수 있는 사람이 되고 싶습니다.
          어제의 나보다 더 나은 오늘의 내가 될 수 있도록 노력하고 있습니다.
        </p>
      </div>
    </div>
  )
}

export default About
