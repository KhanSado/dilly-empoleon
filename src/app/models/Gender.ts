import { Book } from "./Book";

export interface Gender {
  id?: number,
  name: string,
  description: string,
  books: Book[]
}
