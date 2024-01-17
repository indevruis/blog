import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props  {
 postCode: string
}

const Mdx = ({postCode}: Props) => {
 const MDXContent = useMDXComponent(postCode)
 return (
  <MDXContent />
 )
}

export default Mdx