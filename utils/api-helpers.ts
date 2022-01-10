export async function fetchGetJSON(url: string) {
  try {
    const data = fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchPostJSON(url: string, data?: {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data || {}),
    });
    console.log(response);

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
