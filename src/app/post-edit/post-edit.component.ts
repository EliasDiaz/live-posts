import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  formAddPost!: FormGroup;
  index: number = 0;
  editMode: boolean = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        this.editMode = true;
      }
    });

    this.formAddPost = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      description: new FormControl(description, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
      imagePath: new FormControl(imagePath, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2000),
      ]),
    });
  }

  /**
   *
   */
  onSubmit() {
    const title: string = this.formAddPost.value.title;
    const description: string = this.formAddPost.value.description;
    const imagePath: string = this.formAddPost.value.imagePath;

    const postObj = {
      title: this.formAddPost.value.title,
      description: this.formAddPost.value.description,
      imagePath: this.formAddPost.value.imagePath,
      author: 'test@test.com',
      dateTimeCreated: new Date(),
    };

    let post: Post = new Post(
      postObj.title,
      postObj.description,
      postObj.imagePath,
      postObj.author,
      postObj.dateTimeCreated,
      0
    );

    if (this.editMode) {
      this.postService.updatePost(this.index, post);
    } else {
      this.postService.addPost(post);
    }

    post = new Post('', '', '', '', new Date(), 0);

    this.router.navigate(['/post-list']);
  }
}
