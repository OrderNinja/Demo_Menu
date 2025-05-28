
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { MenuItem } from "@/data/menuData";

export const useCartNotifications = () => {
  const { t } = useLanguage();

  const showAddedToCart = (item: MenuItem, isAnother: boolean = false) => {
    const key = isAnother ? "cart.addedAnother" : "cart.added";
    const message = t(key).replace("{item}", item.name);
    toast.success(message);
  };

  const showRemovedFromCart = (item: MenuItem) => {
    const message = t("cart.removed").replace("{item}", item.name);
    toast.info(message);
  };

  const showCartCleared = () => {
    const message = t("cart.cleared");
    toast.info(message);
  };

  return {
    showAddedToCart,
    showRemovedFromCart,
    showCartCleared,
  };
};
