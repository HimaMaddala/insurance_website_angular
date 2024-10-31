// services.component.ts
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: true,
  imports: [NgFor, FeatureComponent],
})
export class ServicesComponent {
  services = [
    { icon: 'assets/service_assets/feature_icon1.png', title: 'Money Back Guarantee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.' },
    { icon: 'assets/service_assets/feature_icon2.png', title: 'All Claims At Anytime', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.' },
    { icon: 'assets/service_assets/feature_icon3.png', title: 'Digital Insurance Policy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.' },
    { icon: 'assets/service_assets/feature_icon4.png', title: 'Direct Payment App', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.' },
  ];
}
