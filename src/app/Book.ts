import { Author } from "./Author"

export interface Book {
  id?: string,
  title: string,
  subtitle?: string,
  isReading: Boolean,
  readed: Boolean,
  sumary: string
}
