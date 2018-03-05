import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';
import { ImageService } from '../../services/image.service';
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
    private posts: Post[];
    private showSpinner: boolean = true;
    private count: number = 0;
    
    constructor (private postsService: PostsService, private categoriesService: CategoriesService, private imageService: ImageService) { }

    ngOnInit () {                   
        this.postsService.get()
            .subscribe(
                data => { 
                    this.posts = data;
                    this.posts.map(post => {
                        post.postNum = this.count;
                        post.imageUrl = this.imageService.getRandomImg();
                        post.categoryNames = this.categoriesService.getCategoryNames(post.categories);
                        
                        this.count++;
                    });
                    
                    this.showSpinner = false;
                },
                error => console.log(error)
            );
    }
}