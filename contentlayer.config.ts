import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
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
    thumbnail: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

const options = {
  theme: {
    dark: 'poimandres',
    light: 'vitesse-light',
  },
  defaultLang: 'js',
}

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
      // @ts-expect-error
      [rehypePrettyCode, options],
    ],
  },
})

export default contentSource
