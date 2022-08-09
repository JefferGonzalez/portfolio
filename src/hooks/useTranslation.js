import { useTranslation } from "react-i18next";

function useTranslationHook() {
  return useTranslation("global");
}

export default useTranslationHook;
