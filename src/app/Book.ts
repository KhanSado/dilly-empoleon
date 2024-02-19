import { Author } from "./Author";
import { Gender } from "./Gender";
import { PublisherCompany } from "./puublisherCompany";

export interface Book {
  id?: string,
  title: string,
  subtitle?: string,
  isReading: Boolean,
  readed: Boolean,
  qtdPages: Number,
  qtdRead: Number, 
  lastRead: Date,
  sumary: string,
  author?: Author,
  gender?: Gender,
  publisherCompany?: PublisherCompany
}
