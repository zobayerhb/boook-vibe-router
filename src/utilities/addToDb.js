import { Bounce, toast } from "react-toastify";

// mark as read data store and get to local storage
const getStoredReadList = () => {
  const storedData = localStorage.getItem("book-list");
  if (storedData) {
    const parseData = JSON.parse(storedData);
    return parseData;
  } else {
    return [];
  }
};

const addToStoredData = (id) => {
  const storedData = getStoredReadList();
  if (storedData.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedData.push(id);
    const dataStore = JSON.stringify(storedData);
    localStorage.setItem("book-list", dataStore);
    toast.success("Successfully added book read list", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
};

// wish list data get and store to local storage
const getWishListStoredData = () => {
  const storedData = localStorage.getItem("wish-list");
  if (storedData) {
    const parseWishData = JSON.parse(storedData);
    return parseWishData;
  } else {
    return [];
  }
};

const addStoredWishListData = (id) => {
  const storedData = getWishListStoredData();
  if (storedData.includes(id)) {
    console.log(id, "data already exists");
  } else {
    storedData.push(id);
    const dataStringify = JSON.stringify(storedData);
    localStorage.setItem("wish-list", dataStringify);
  }
};

export { addToStoredData, addStoredWishListData, getStoredReadList };
