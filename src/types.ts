import Request from "./classes/Request";

export type actionFunction = (request: Request) => Promise<any> | void



export interface imgurResponse {
  id: string,
  title: string,
  description: any,
  datetime: number,
  cover: string,
  cover_width: number,
  cover_height: number,
  account_url: string,
  account_id: number,
  privacy: string,
  layout: string,
  views: number,
  link: string,
  ups: number,
  downs: number,
  points: number,
  score: number,
  is_album: boolean,
  vote: any,
  favorite: boolean,
  nsfw: boolean,
  section: '',
  comment_count: number,
  favorite_count: number,
  topic: string,
  topic_id: number,
  images_count: number,
  in_gallery: boolean,
  is_ad: boolean,
  tags: any[],
  ad_type: number,
  ad_url: '',
  in_most_viral: boolean,
  images: [{
    id: string,
    title: any,
    description: string,
    datetime: number,
    type: string,
    animated: boolean,
    width: number,
    height: number,
    size: number,
    views: number,
    bandwidth: number,
    vote: any,
    favorite: boolean,
    nsfw: any,
    section: any,
    account_url: any,
    account_id: any,
    is_ad: boolean,
    in_most_viral: boolean,
    has_sound: boolean,
    tags: any[],
    ad_type: number,
    ad_url: '',
    in_gallery: boolean,
    link: string,
    comment_count: any,
    favorite_count: any,
    ups: any,
    downs: any,
    points: any,
    score: any
  }]
}

export interface translator {
  text: '',
  from: {
    language: { didYouMean: boolean, iso: '' },
    text: { autoCorrected: boolean, value: '', didYouMean: boolean }
  },
  raw: ''
}

export interface at {
  id: string,
  tag: string
}

export interface urbanResponse {
  id: string
  term: string
  url: string
  definition: string
  example: string
  author: string
  author_url: string
  posted: string
}

export interface definitionResponse {
  meta: {
    synsetOffset: number,
    lexFilenum: number,
    synsetType: string,
    wordCount: number,
    words: object[],
    pointerCount: number,
    pointers: object[]
  },
  glossary: string
}