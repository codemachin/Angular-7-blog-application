import { Injectable } from '@angular/core';

// importing http client to make requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

// import observable related code
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'


@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public authToken = 'OTZjYjc3Njg1Yzk0ODgxYWU2OGE0ODU2MWI5ZWY2OWFjOGY0ODc3OTRiZmViNzk1ZDI3YWY2NjhlY2E4ZDkxOWM0ZTM5NmU1YzFkM2I0YmM3MDg3NjhhYjZjOGY5MmY2YzUwNDc0OTIwNjY2YmI0YTU3OWRkYjkwY2M2NDU4MmNkYw=='
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) {
    console.log('Blog-Http service is called')
  }

  //exception handler

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl +'/all?authToken='+this.authToken);
    console.log("myResponse");
    return myResponse;
    
  }

  // method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId +'?authToken='+this.authToken)
    return myResponse;
  }

  // method to create a new blog
  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken='+this.authToken,blogData)
    return myResponse;
  }

  // method to delete blog
  public deleteBlog(blogId):any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken,data)
    return myResponse
  }

  //edit a blog
  public editBlog(blogId, blogData):any{
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken='+this.authToken,blogData)
    return myResponse;
  }

}
