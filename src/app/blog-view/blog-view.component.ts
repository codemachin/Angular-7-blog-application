import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, public toastr: ToastsManager, vcr: ViewContainerRef,private location: Location) {
    console.log('constructer is called');
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log('ngoninit is called')
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
    // console.log(this.currentBlog)

    

  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog deleted successfully', 'success');
        setTimeout(()=>{
          this.router.navigate(['/home'])
        },1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("Some error occurred",'Error')
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog view destory called")
  }
  

  

}
