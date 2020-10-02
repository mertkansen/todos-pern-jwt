export const getName = async (setName, setAllTodos) => {
  try {
    await fetch("http://localhost:1337/dashboard/", {
      method: "GET",
      headers: {
        token: localStorage.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setName(res[0].user_name);
        setAllTodos(res);
      });
  } catch (err) {
    console.log(err);
  }
};
