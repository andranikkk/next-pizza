import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error, "Error getting ingredients");
      } finally {
        setLoading(false);
      }
    }

    getIngredients();
  }, []);

  return {
    ingredients,
    loading,
  };
};
