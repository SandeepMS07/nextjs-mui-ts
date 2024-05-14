"use client";

import AppSnackBar from "@/components/AppSnackbar.tsx";
import KenLoader from "@/components/KenComponents/KenLoader";
import { AppContextProvider } from "@/helpers/contexts/appContext";
import { AuthContextProvider } from "@/helpers/contexts/authContext";
import { FormContextProvider } from "@/helpers/contexts/formContext";
import ErrorFallback from "@/helpers/ErrorFallback";
import GlobalThemeProvider from "@/helpers/themes/themeProvider";
import { metadata } from "@/helpers/metadata";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import i18next from "i18next";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { I18nextProvider } from "react-i18next";
import "react-perfect-scrollbar/dist/css/styles.css";
import AppLayout from "@/components/Layouts/AppLayout";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-phone-input-2/lib/style.css";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline } from "@mui/material";
import AuthLayout from "@/components/Layouts/AuthLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LayoutComponent = false ? AppLayout : AuthLayout;
  return (
    <html lang="en">
      <head>
        <title>{`${metadata.title}`}</title>
      </head>
      <body>
        <React.Suspense fallback={<KenLoader />}>
          <AppContextProvider>
            <AuthContextProvider>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <FormContextProvider>
                  <AppSnackBar>
                    <AppRouterCacheProvider>
                      <GlobalThemeProvider>
                        <I18nextProvider i18n={i18next}>
                          <ErrorBoundary
                            FallbackComponent={ErrorFallback}
                            onReset={() => {
                              window.location.reload();
                            }}
                          >
                            <div className="App">
                              <CssBaseline />
                              <LayoutComponent>{children}</LayoutComponent>
                            </div>
                          </ErrorBoundary>
                        </I18nextProvider>
                      </GlobalThemeProvider>
                    </AppRouterCacheProvider>
                  </AppSnackBar>
                </FormContextProvider>
              </LocalizationProvider>
            </AuthContextProvider>
          </AppContextProvider>
        </React.Suspense>
      </body>
    </html>
  );
}
