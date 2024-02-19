export interface Book {
  id?: string,
  title: string,
  subtitle?: string,
  isReading: Boolean,
  readed: Boolean,
  qtdPages: Number,
  qtdRead: Number, 
  lastRead: Date,
  sumary: string
}
