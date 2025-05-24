import { Component, ViewEncapsulation ,AfterViewInit, ElementRef, ViewChildren, QueryList} from '@angular/core'

@Component({
  selector: 'app-land5',
  templateUrl: './land5.component.html',
  styleUrls: ['./land5.component.css']
})
export class Land5Component {
  @ViewChildren('animatedSection') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // stop observing once visible
        }
      });
    }, {
      threshold: 0.1
    });

    this.sections.forEach(section => observer.observe(section.nativeElement));
  }
}
