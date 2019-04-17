import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text</h1><p>Small text</p>",
      "description": "this is description",
      "title": "This is example blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text 2</h1><p>Small text</p>",
      "description": "this is description",
      "title": "This is example blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text 3</h1><p>Small text</p>",
      "description": "this is description",
      "title": "This is example blog 3"
    }
  ]

  public currentBlog;

  
  constructor() { 
    console.log("service constructor is called")
  }
  

  public getAllBlogs():any{
    return this.allBlogs;
  }

// method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog)
    return this.currentBlog
  }


}
