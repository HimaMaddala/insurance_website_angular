import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  standalone: true,
})
export class FeatureComponent {
  @Input() data!: { icon: string; title: string; description: string };
}
