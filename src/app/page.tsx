"use client";

import { useCallback, useEffect } from "react";
import { useNavigationStore, type PageKey } from "@/lib/store";
import Navbar from "@/components/sala/Navbar";
import Footer from "@/components/sala/Footer";
import WhatsAppButton from "@/components/sala/WhatsAppButton";
import HomePage from "@/components/sala/pages/HomePage";
import AboutPage from "@/components/sala/pages/AboutPage";
import ServicesPage from "@/components/sala/pages/ServicesPage";
import ServiceDetailPage from "@/components/sala/pages/ServiceDetailPage";
import MarketsPage from "@/components/sala/pages/MarketsPage";
import VehicleCategoriesPage from "@/components/sala/pages/VehicleCategoriesPage";
import HowItWorksPage from "@/components/sala/pages/HowItWorksPage";
import ContactPage from "@/components/sala/pages/ContactPage";

const VALID_PAGES: PageKey[] = [
  "home",
  "about",
  "services",
  "service-detail",
  "markets",
  "vehicles",
  "how-it-works",
  "contact",
];

function PageRouter() {
  const currentPage = useNavigationStore((s) => s.currentPage);

  const handleHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "/") {
      useNavigationStore.setState({ currentPage: "home", serviceId: null });
      return;
    }

    const parts = hash.split("/");
    const page = parts[0] as PageKey;
    const svcId = parts[1] || null;

    if (VALID_PAGES.includes(page)) {
      useNavigationStore.setState({
        currentPage: page,
        serviceId: page === "service-detail" ? svcId : null,
      });
    }
  }, []);

  useEffect(() => {
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [handleHash]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "service-detail":
        return <ServiceDetailPage />;
      case "markets":
        return <MarketsPage />;
      case "vehicles":
        return <VehicleCategoriesPage />;
      case "how-it-works":
        return <HowItWorksPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{renderPage()}</div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function Home() {
  return <PageRouter />;
}
