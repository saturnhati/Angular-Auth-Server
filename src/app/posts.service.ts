import { Injectable } from "@angular/core";
import { Post } from "./models/post";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    return this.posts.find((post) => post.id == id);
  }

  updatePost(data: Partial<Post>, id: number) {
    this.posts = this.posts.map((post) => (post.id == id ? { ...post, ...data } : post));
    return this.posts.find((post) => post.id == id) as Post;
  }
}
