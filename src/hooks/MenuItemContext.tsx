import React, { createContext, useContext } from "react";
import { useRecipes } from "./useRecipe";

const MenuItemsContext = createContext<any>(null);

export function MenuItemsProvider({ children }: { children: React.ReactNode }) {
  const value = useRecipes();
  return (
    <MenuItemsContext.Provider value={value}>
      {children}
    </MenuItemsContext.Provider>
  );
}

export function useMenuItemsContext() {
  const ctx = useContext(MenuItemsContext);
  if (!ctx) {
    throw new Error("useMenuItemsContext must be used inside MenuItemsProvider");
  }
  return ctx;
}

