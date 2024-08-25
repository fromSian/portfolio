import { Params } from "@/types/global";
import { lazy, Suspense } from "react";
import Loading from "./loading";

const Main = lazy(() => import("./main"));
export default function RootLayout({
  children,
  params: { lng },
}: Readonly<
  {
    children: React.ReactNode;
  } & Params
>) {
  return (
    <Suspense fallback={<Loading />}>
      <Main lng={lng}>{children}</Main>
    </Suspense>
  );
}
