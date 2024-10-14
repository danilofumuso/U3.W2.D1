import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() posts: iPost[] = [];

  // @ContentChild('form') ref!: ElementRef;
}
