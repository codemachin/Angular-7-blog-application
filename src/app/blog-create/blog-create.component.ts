import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import {ActivatedRoute, Router} from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy","Drama","Action","Technology"]

  ngOnInit() {
  }

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    console.log(blogData)

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created");
        console.log(data);
        this.toastr.success('Blog Posted successfully !', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        },1000)
      },
      error => {
        console.log("Some error occurred");
        console.log(error.errorMessage);
        alert("Some error occurred")
      }
    )

  }

}
