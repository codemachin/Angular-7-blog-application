import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // providers : [BlogService]
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs=[];

  constructor(private blogHttpService:BlogHttpService) { 
    console.log('home component constructor called')
  }

  ngOnInit() {
    console.log("home component oninit called")

    //this.allBlogs = this.blogHttpService.getAllBlogs();

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log("logging data")
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBlogs)


  }

  ngOnDestroy(){
    console.log("home component destroyed")
  }

}
