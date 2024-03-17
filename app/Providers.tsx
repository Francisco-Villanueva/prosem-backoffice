"use client";
import { setAuthInterceptor } from "@/services/axios.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, getSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
const client = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const setupAxiosInterceptor = async () => {
      // Obtener companyId de la sesión
      const session = await getSession();
      const companyId = session?.user?.companyId || null;

      // Configurar interceptor de Axios con companyId
      setAuthInterceptor(companyId);
    };

    setupAxiosInterceptor();
  }, []);
  return (
    <SessionProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
