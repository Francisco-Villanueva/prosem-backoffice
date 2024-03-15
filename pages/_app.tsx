import { AppProps } from "next/app";
import { getSession } from "next-auth/react";
import { NextComponentType, NextPageContext } from "next";
import { setAuthInterceptor } from "@/services/axios.config";

interface MyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, {}>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

// @ts-ignore
MyApp.getInitialProps = async ({ Component }: MyAppProps, ctx) => {
  let companyId = null;

  // Obtener companyId de la sesión
  const session = await getSession(ctx);
  if (session?.user?.companyId) {
    companyId = session.user.companyId;
  }

  // Configurar interceptor de Axios con companyId
  setAuthInterceptor(companyId);

  // Obtener props iniciales si están disponibles en la página
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
