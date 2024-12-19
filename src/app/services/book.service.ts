import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';
import books from '../services/dummy.json';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = books.map(book => ({
    ...book,
    publishDate: new Date(book.publishDate),
    dateAdded: new Date(book.dateAdded)
  }));

  getLatestBooks(): Observable<Book[]> {
    return of(this.books
      .sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime())
      .slice(0, 3)
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    const searchTerm = term.toLowerCase();
    return of(this.books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    ));
  }

  getAllBooks(page: number = 1, itemsPerPage: number = 10): Observable<{books: Book[], total: number}> {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedBooks = this.books.slice(start, end);
    return of({
      books: paginatedBooks,
      total: this.books.length
    });
  }

  getBook(id: number): Observable<Book | undefined> {
    return of(this.books.find(book => book.id === id));
  }
}