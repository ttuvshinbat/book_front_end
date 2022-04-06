export const handleEdit = (del) => {
  setDeletebook(true);
  console.log(del);
  fetch(`http://52.221.185.255:3001/api/updatebook/${del}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
};

export const foodService = {
  handleEdit,
};
