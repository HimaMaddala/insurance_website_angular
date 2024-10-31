import { Component } from '@angular/core';
import { NgFor,CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  imports: [NgFor,CommonModule]
})
export class BlogsComponent {
  blogs = [
    {
      image: 'assets/blog_assets/img1.jpg',
      title: 'What Is Personal Liability Umbrella Coverage',
      date: '14 Aug 2021',
      author: 'BY ADMIN | INSURANCE',
      link: '#',
    },
    {
      image: 'assets/blog_assets/img2.jpg',
      title: 'Insurance Covers Risk Of Fire Absence Of Fire Insurance',
      date: '14 Aug 2021',
      author: 'BY ADMIN | INSURANCE',
      link: '#',
    },
    {
      image: 'assets/blog_assets/img3.jpg',
      title: 'Ambulance Cover Of Fire On Insurance Serving',
      date: '14 Aug 2021',
      author: 'BY ADMIN | INSURANCE',
      link: '#',
    },
  ];
}
