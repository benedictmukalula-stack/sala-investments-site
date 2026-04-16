import { create } from "zustand";

export type PageKey =
  | "home"
  | "about"
  | "services"
  | "service-detail"
  | "markets"
  | "vehicles"
  | "how-it-works"
  | "contact";

interface NavigationStore {
  currentPage: PageKey;
  serviceId: string | null;
  navigate: (page: PageKey, serviceId?: string | null) => void;
  goBack: () => void;
}

export const useNavigationStore = create<NavigationStore>((set, get) => ({
  currentPage: "home",
  serviceId: null,
  navigate: (page, serviceId = null) => {
    const hash = serviceId ? `#${page}/${serviceId}` : `#${page}`;
    window.location.hash = hash;
    set({ currentPage: page, serviceId });
    window.scrollTo({ top: 0, behavior: "instant" });
  },
  goBack: () => {
    const { navigate } = get();
    navigate("home");
  },
}));
