import Link from 'next/link'
import { TfiEmail } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 mb-5">
        <div className="flex justify-center">
          <Link href="mailto:indevruis@gmail.com" className="px-1.5">
            <TfiEmail color="#64748b" />
          </Link>
          <Link href="https://github.com/indevruis" className="px-1.5">
            <FaGithub color="#64748b" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/%EC%84%9C%EC%9C%A4-%EC%B5%9C-1208312a4/"
            className="px-1.5"
          >
            <SlSocialLinkedin color="#64748b" />
          </Link>
        </div>
        <div className="flex justify-center mt-0.5 text-[13px] text-slate-500">
          <div>© 2024</div>
          <div>&nbsp; • &nbsp;</div>
          <div>SeoYun Choi</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
