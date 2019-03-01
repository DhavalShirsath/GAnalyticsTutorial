import { Directive, Input, HostListener } from '@angular/core';
import { GoogleAnalyticsService } from '../services/google/analytics/google-analytics.service';

@Directive({
  selector: '[href]'
})
export class linkTrackerDirective {
  @Input() 
  public href:string;

  public category:string = 'ExternalLink';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  @HostListener ('click', ['$event'])
  onClick(event: any) {
    if(event.target.nodeName == 'A'){
        console.log(this.category, this.href);
      this.googleAnalyticsService.trackEvent(this.category, this.href);
  }
 }
}