import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from "./components/about/about.component";
import { InsuranceServicesComponent } from "./components/insurance-services/insurance-services.component";
import { WhychooseusComponent } from "./components/whychooseus/whychooseus.component";
import { ExpertTeamComponent } from "./components/expert-team/expert-team.component";
import { GetstartedComponent } from "./components/getstarted/getstarted.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ServicesComponent, AboutComponent, InsuranceServicesComponent, WhychooseusComponent, ExpertTeamComponent, GetstartedComponent, FooterComponent, BlogsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'behance';
}
