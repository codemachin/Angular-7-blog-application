import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {BlogHttpService} from '../blog-http.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    // this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId)

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log("logging data")
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error occurred");
        console.log(error.errorMessage)
      }
    )
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog Edited successfully !', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId])
        }, 1000)
      },
      error => {
        console.log("Some error occurred");
        console.log(error.errorMessage);
        this.toastr.success("Some error occurred","Error")
      }
    )
  }

}
