export const isAuth = async (setIsAuthenticated) => {
  try {
    await fetch("/auth/is-verify", {
      method: "GET",
      headers: {
        token: localStorage.token,
      },
    })
      .then((res) => res.json())
      .then((res) => setIsAuthenticated(res === true));
  } catch (err) {
    console.log(err.message);
  }
};
