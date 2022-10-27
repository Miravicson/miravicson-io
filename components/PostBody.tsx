import markdownStyles from '@styles/markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl px-8 pb-4 mx-auto md:px-1">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
