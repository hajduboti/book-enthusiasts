import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
        id: 1,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        description: "A classic of African literature that tells the story of Okonkwo, a respected warrior in the Umuofia clan.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1958, 0, 1),
        dateAdded: new Date(2020, 11, 15)
      },
      {
        id: 2,
        title: "Fairy tales",
        author: "Hans Christian Andersen",
        description: "A collection of beloved fairy tales including The Little Mermaid, The Snow Queen, and The Ugly Duckling.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1836, 0, 1),
        dateAdded: new Date(2024, 3, 14)
      },
      {
        id: 3,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        description: "An epic poem that follows Dante's journey through Hell, Purgatory, and Paradise.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1315, 0, 1),
        dateAdded: new Date(2019, 8, 19)
      },
      {
        id: 4,
        title: "The Epic Of Gilgamesh",
        author: "Unknown",
        description: "An ancient Mesopotamian poem that follows the adventures of King Gilgamesh.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(-1700, 0, 1),
        dateAdded: new Date(2024, 4, 12)
      },
      {
        id: 5,
        title: "The Book Of Job",
        author: "Unknown",
        description: "A profound meditation on human suffering and divine justice from the Hebrew Bible.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(-600, 0, 1),
        dateAdded: new Date(2024, 6, 28)
      },
      {
        id: 6,
        title: "One Thousand and One Nights",
        author: "Unknown",
        description: "A collection of Middle Eastern folk tales compiled over many centuries.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1200, 0, 1),
        dateAdded: new Date(2024, 0, 10)
      },
      {
        id: 7,
        title: "Njál's Saga",
        author: "Unknown",
        description: "An Icelandic saga that tells the story of a 50-year blood feud.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1350, 0, 1),
        dateAdded: new Date(2024, 0, 9)
      },
      {
        id: 8,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel following Elizabeth Bennet as she deals with issues of manners, upbringing, and marriage.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1813, 0, 1),
        dateAdded: new Date(2022, 0, 22)
      },
      {
        id: 9,
        title: "Le Père Goriot",
        author: "Honoré de Balzac",
        description: "A masterpiece of French literature about a father's sacrifice for his daughters.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1835, 0, 1),
        dateAdded: new Date(2024, 0, 7)
      },
      {
        id: 10,
        title: "Molloy, Malone Dies, The Unnamable, the trilogy",
        author: "Samuel Beckett",
        description: "A groundbreaking trilogy of novels that pushed the boundaries of narrative fiction.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1952, 0, 1),
        dateAdded: new Date(2024, 0, 6)
      }
  ];

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
}