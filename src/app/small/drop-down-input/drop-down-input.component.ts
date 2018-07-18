import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'drop-down-input',
  templateUrl: './drop-down-input.component.html',
    styleUrls: ['./drop-down-input.component.css'],
    providers: [NgbDropdownConfig]
})
export class DropDownInputComponent implements OnInit {


    _alternatives: string[] = [];
    _label: string;
    _value = '';
    _placeholder = '';

    @Input()
    set label(label: string) {
        this._label = label;
    }

    @Input()
    set alternatives(alternatives: string[]) {
        this._alternatives = alternatives;
    }

    @Input()
    set placeholder(value: string) {
        this._placeholder = value;
    }

    @Input()
    set value(value: string) {
        this._value = value;
    }

    @Output() valueChange = new EventEmitter<string>();

    constructor(config: NgbDropdownConfig) {
        config.placement = 'bottom-right';
    }

    select(item: string) {
        this._value = item;
        this.valueChange.emit(item);
    }

    valueChanged(value) {
        this.valueChange.emit(value.target.value);
    }

  ngOnInit() {
  }

}
