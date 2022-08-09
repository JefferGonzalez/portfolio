import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return [isLoading];
}

export default useLoading;
