import { Component } from '@angular/core';
import { NgFor,CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-expert-team',
  templateUrl: './expert-team.component.html',
  imports: [NgFor,CommonModule]
})
export class ExpertTeamComponent {
  hoverColor: string = '#308a7a';

  teamMembers = [
    {
      name: 'Mesiva Sccot',
      position: 'Marketing Ex.',
      image: 'assets/expert_assets/img1.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Jeson Thomson',
      position: 'Marketing Ex.',
      image: 'assets/expert_assets/img2.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Kohn Wright',
      position: 'Marketing Ex.',
      image: 'assets/expert_assets/img3.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Andrew Schimke',
      position: 'Marketing Ex.',
      image: 'assets/expert_assets/img4.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
  ];
}
