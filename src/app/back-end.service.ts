import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

/**
 * data base path
 * https://live-posts-5ea46-default-rtdb.firebaseio.com/
 */

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  /**
   * Function saveData()
   */
  saveData() {
    /*step 1 -> get list of posts from post service*/
    const listOfPosts = this.postService.getListOfPosts();

    /*step 2 -> send list of posts to backend*/
    this.http
      .put(
        'https://live-posts-5ea46-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  /**
   * Function getData()
   */
  fetchData() {
    /** Step 1 */
    this.http
      .get<Post[]>('https://live-posts-5ea46-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          /** step 2 send to post.service */
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
