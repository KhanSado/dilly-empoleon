import { Author } from "./Author"

export interface Book {
  id?: string,
  title: string,
  subtitle?: string,
  author?: Author,
  isReading: Boolean,
  readed: Boolean,
  sumary: string
}
