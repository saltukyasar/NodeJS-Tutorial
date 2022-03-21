const posts = [{ name: "photo1" }, { name: "photo2" }, { name: "photo3" }];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  posts.push(newPost);
  const promise1 = new Promise((resolve, reject) => {
    console.log("yeni post hazirlaniyor");
    if (newPost) {
        resolve(posts);
    } else {
        reject('bir hata olustu');
    }
    return promise1;
  });
};

async function processPost (){
    try{
        await addPost({name:"photo6"});  
        listPosts();
    }catch(error){
          consol.log(error);
      }
}

processPost();