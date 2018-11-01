import { Component, OnInit, Input } from '@angular/core';
import { MyModuleConfig } from '../mymodule.config';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() label: string;

  prefix: string;

  constructor(private config: MyModuleConfig) {
    this.prefix = config.prefix;
  }

  ngOnInit() {
  }

}
