import { useState } from "react";

// Pass URL
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => {
        setLoading(false);

        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data?.user));
          window.location.reload();
        }

        throw new Error(data?.message || data);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };
  return { loading, error, handleGoogle };
};

// The expression data?.user checks if data is defined (not null or undefined). 
// If it is, it then checks if user is defined within data. 
// If both conditions are met, it gives you the value of data.user. 
// If data or user is undefined, it returns null. 
// This helps prevent errors when dealing with potentially missing data.

export default useFetch;

