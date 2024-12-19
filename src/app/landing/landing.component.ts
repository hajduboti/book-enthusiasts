import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent implements OnInit {
  latestBooks: Book[] = [];
  searchResults: Book[] = [];
  searchTerm = '';
  private searchSubject = new Subject<string>();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bookService.getLatestBooks().subscribe(books => {
      this.latestBooks = books;
    });

    this.route.queryParams.subscribe(params => {
      if (params['search']) {
        this.searchTerm = params['search'];
        this.performSearch(this.searchTerm);
      }
    });

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.bookService.searchBooks(term))
    ).subscribe(results => {
      this.searchResults = results;
    });
  }

  onSearch(term: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: term },
      queryParamsHandling: 'merge'
    });
    this.searchSubject.next(term);
  }

  performSearch(term: string) {
    this.searchSubject.next(term);
  }
}
