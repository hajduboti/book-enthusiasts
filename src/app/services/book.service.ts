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
      },
      {
        id: 11,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel depicting the American Dream and the Jazz Age in the 1920s.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1925, 3, 10),
        dateAdded: new Date(2024, 0, 5)
      },
      {
        id: 12,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel exploring themes of surveillance and totalitarianism.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1949, 5, 8),
        dateAdded: new Date(2024, 0, 4)
      },
      {
        id: 13,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A poignant story about racial injustice and moral growth.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1960, 6, 11),
        dateAdded: new Date(2024, 0, 3)
      },
      {
        id: 14,
        title: "War and Peace",
        author: "Leo Tolstoy",
        description: "An epic novel about Russian society during the Napoleonic era.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1869, 0, 1),
        dateAdded: new Date(2024, 0, 2)
      },
      {
        id: 15,
        title: "Moby-Dick",
        author: "Herman Melville",
        description: "A gripping tale of a sea captain's obsession with a white whale.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1851, 10, 14),
        dateAdded: new Date(2024, 0, 1)
      },
      {
        id: 16,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        description: "A satirical novel about the adventures of a self-proclaimed knight-errant.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1605, 0, 1),
        dateAdded: new Date(2023, 11, 30)
      },
      {
        id: 17,
        title: "The Odyssey",
        author: "Homer",
        description: "An ancient Greek epic following Odysseus' journey home from the Trojan War.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(-700, 0, 1),
        dateAdded: new Date(2023, 11, 29)
      },
      {
        id: 18,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        description: "A journey through Hell, Purgatory, and Heaven in poetic form.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1320, 0, 1),
        dateAdded: new Date(2023, 11, 28)
      },
      {
        id: 19,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A novel capturing teenage angst and alienation in post-WWII America.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1951, 6, 16),
        dateAdded: new Date(2023, 11, 27)
      },
      {
        id: 20,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "A dystopian story about a future society driven by technological advancements.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1932, 0, 1),
        dateAdded: new Date(2023, 11, 26)
      },
      {
        id: 21,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        description: "A novel about love, morality, and redemption in Victorian England.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1847, 9, 16),
        dateAdded: new Date(2023, 11, 25)
      },
      {
        id: 22,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        description: "A philosophical novel exploring morality, faith, and human nature.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1880, 0, 1),
        dateAdded: new Date(2023, 11, 24)
      },
      {
        id: 23,
        title: "Frankenstein",
        author: "Mary Shelley",
        description: "A gothic novel about a scientist's ambition and its consequences.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1818, 0, 1),
        dateAdded: new Date(2023, 11, 23)
      },
      {
        id: 24,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        description: "A tragic tale of love and revenge set on the Yorkshire moors.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1847, 11, 1),
        dateAdded: new Date(2023, 11, 22)
      },
      {
        id: 25,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        description: "A psychological drama delving into the mind of a criminal.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1866, 0, 1),
        dateAdded: new Date(2023, 11, 21)
      },
      {
        id: 26,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel about Bilbo Baggins' unexpected journey.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1937, 8, 21),
        dateAdded: new Date(2023, 11, 20)
      },
      {
        id: 27,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        description: "A tragic love story set in imperial Russia.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1877, 0, 1),
        dateAdded: new Date(2023, 11, 19)
      },
      {
        id: 28,
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        description: "A historical novel set during the French Revolution.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1859, 3, 30),
        dateAdded: new Date(2023, 11, 18)
      },
      {
        id: 29,
        title: "Dracula",
        author: "Bram Stoker",
        description: "A Gothic horror novel introducing the iconic Count Dracula.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1897, 4, 26),
        dateAdded: new Date(2023, 11, 17)
      },
      {
        id: 30,
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        description: "A realist novel about the life of Emma Bovary and her pursuit of passion.",
        coverUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        publishDate: new Date(1857, 0, 1),
        dateAdded: new Date(2023, 11, 16)
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