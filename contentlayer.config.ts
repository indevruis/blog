import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,

  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: false,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    hashtage: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAccessibleEmojis,
      [
        rehypeExternalLinks,
        {
          target: ['_blank'],
          rel: ['noreferrer noopener'],
        },
      ],
    ],
  },
})

export default contentSource