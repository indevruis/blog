interface Props {
  title: string
  content: string
}

const PageHeader = ({ title, content }: Props) => {
  return (
    <div className="mb-5">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default PageHeader
