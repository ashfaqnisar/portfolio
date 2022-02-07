import { useEffect } from "react";
import TopBar from "./components/TopBar";
import { useRouter } from "next/router";
import { pageview } from "../../utils/analytics";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={"flex flex-col h-screen"}>
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
