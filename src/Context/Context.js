import { toast } from "react-toastify";

import React from "react";

export const Context = React.createContext();

export function ToastProvider({ children }) {
  function showToast(message, type) {
    switch (type) {
      case "success":
        toast.success(message);
        break;

      case "error":
        toast.error(message);
        break;

      default:
        toast(message);
        break;
    }
  }

  const value = { showToast };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
