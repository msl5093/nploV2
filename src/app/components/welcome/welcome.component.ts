import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Category } from '../../models/category.model';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: [ 'welcome.component.css' ]
})

export class WelcomeComponent implements OnInit { 
    posts: Post[];
    showSpinner: boolean = true;
    
    constructor (private postsService: PostsService, private categoriesService: CategoriesService) { }

    ngOnInit () {        
        this.postsService.get()
            .subscribe(
                data => { 
                    this.posts = data;
                    this.posts.map(post => {
                        post.categoryNames = this.categoriesService.getCategoryNames(post.categories);
                    });
                    
                    this.showSpinner = false;
                },
                error => console.log(error)
            );
    }
}