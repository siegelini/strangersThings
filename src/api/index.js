const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Registering user result: ", result);
    return result;
  } catch (error) {
    console.log("Error registering user: ", error);
  }
}

export async function userLogin(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMe(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("Result in fetchMe: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(title, description, price, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePosts(token) {
  try {
    const response = await fetch(`${BASE_URL}/posts/_id`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// export async function updatePost(postId, title, description, price, token) {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${postId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       }),
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function createMessage(content, post, _id, token) {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         message: {
//           content,
//           post,
//           _id,
//         },
//       }),
//     });

//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function fetchMessages() {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
