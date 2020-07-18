export interface IBlogContent {
  id: string
  title: string
  summary: string
  keywords?: string
}

export const blogContents: IBlogContent[] = [
  {
    id: "blog1",
    title: "Blog 1",
    summary: "This is the first blog!",
    keywords: "key1, key2",
  },
  {
    id: "blog2",
    title: "Blog 2",
    summary: "This is the 2nd blog!",
    keywords: "key3",
  },
  {
    id: "blog3",
    title: "Blog 3",
    summary: "This is the 3nd blog!",
    keywords: "key4, key5, key6",
  },
]
