let url = "https://jsonplaceholder.typicode.com/";

let posts = "posts";
let comments = "comments";
let albums = "albums";
let photos = "photos";
let todos = "todos";
let users = "users";

let loadData = async () => {
  let results = await Promise.all([
    fetch(url + posts),
    fetch(url + comments),
    fetch(url + albums),
    fetch(url + photos),
    fetch(url + todos),
    fetch(url + users),
  ]);

  let dataPromises = results.map((result) => result.json());
  let finalData = await Promise.all(dataPromises);
  return [finalData];
};

(async () => {
  const data = await loadData();
  console.log(data);
})();

// Promise.all helps to fetch multiple endpoints parallelly
