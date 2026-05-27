import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostsService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDatabaseService();
    // const provider = new LocalDataBaseService();
    const provider = new WebApiPostsService();
    
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();