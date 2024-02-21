import { Book } from "./Book";

export interface BookRoot {
  books: [],
  currentPage: number,
  nextPage: string,
  prevPage: string,
  qtdBooks: number,
  qtdPages:  number
}
