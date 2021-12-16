import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-cliffs-30771.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return [packages, setPackages];
};

export default usePackage;
