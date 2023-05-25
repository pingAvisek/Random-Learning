let userUrl = "https://jsonplaceholder.typicode.com/users";

// fetch(userUrl)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let fetchData = async () => {
  let response = await fetch(userUrl);
  let data = await response.json();
  console.log(data);
};

fetchData();
