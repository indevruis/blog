import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 mb-5">
        <div className="flex justify-center">
          <Link href="/" className="px-2">
            <Image src="/images/email.png" width={20} height={20} alt="Email" />
          </Link>
          <Link href="/" className="px-2">
            <Image
              src="/images/github.png"
              width={20}
              height={20}
              alt="Email"
            />
          </Link>
          <Link href="/" className="px-2">
            <Image
              src="/images/linkedIn.png"
              width={20}
              height={20}
              alt="Email"
            />
          </Link>
        </div>
        <div className="flex justify-center mt-1">
          <div>© 2024</div>
          <div>&nbsp; • &nbsp;</div>
          <div>SeoYun Choi</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
