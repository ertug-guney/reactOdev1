import axios from "axios";

export default async function getData(user_id) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  );
  console.log(users); //1. yöntem
  console.log(posts); //1. yöntem
}
