import axios from "axios";

export default async function getData(user_id) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  );
  console.log(user); //1. yöntem
  console.log(post); //1. yöntem
  // return { data: user }, { data: post };   //2. yöntem
}
