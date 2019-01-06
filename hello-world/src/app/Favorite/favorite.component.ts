import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit{
    @Input() isFavorite: boolean
    @Output() change = new EventEmitter();

    constructor() {
    }
    
    ngOnInit(){

    }

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({NewValue: Boolean});
    }
}

export interface FavoriteChangedEventArgs{
    NewValue: boolean;
}