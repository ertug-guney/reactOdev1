import axios from "axios";

export default async function getData(user_id) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  ); //ödevdeki link kullanılırsa (?userId=) 10 tane post gelir

  // const { data: posts } = await axios(
  //   "https://jsonplaceholder.typicode.com/posts/" + user_id
  // ); // 1 post gelmesi için

  console.log(users); //1. yöntem
  console.log(posts); //1. yöntem
}
