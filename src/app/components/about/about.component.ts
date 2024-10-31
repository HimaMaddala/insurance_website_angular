import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [NgFor, FeatureComponent],
})
export class AboutComponent {
  features = [
    { icon: 'assets/service_assets/feature_icon1.png', title: 'Trusted By Thousands', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.' },
    { icon: 'assets/service_assets/feature_icon2.png', title: 'Set For Life', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.' },
    { icon: 'assets/service_assets/feature_icon3.png', title: 'Protective Insurance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.' },
  ];
}
