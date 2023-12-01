import categoriesClient from "@/services/categoriesClient";
import fetchClient from "@/services/fetchClient";
import { ICategory } from "@/types/category";
import { useEffect, useState } from "react";

export const useGetCategoriesQuery = () => {
  const [data, setData] = useState<ICategory[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const categories = await categoriesClient.getAll();
    setData(categories);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchData();
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
