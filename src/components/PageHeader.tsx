const PageHeader = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="mb-5">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default PageHeader
