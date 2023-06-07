import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      {width > 500 && height > 500 ? (
        <div className="lg:grid grid-cols-6 bg-white w-[65rem] lg:w-[160vw] xl:w-[100vw] h-auto">
          <div className="bg-[#fafbfd] ">
            <div className="p-10 lg:pt-20 lg:fixed top-0 lg:w-64 xl:w-56 1.5xl:w-64  lg:h-[150vh] xl:h-[100vh]">
              <Sidebar />
            </div>
          </div>
          <div className="text-black col-span-5">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <h1 className="text-center text-3xl font-bold font-NotoSans">
            Not available for Mobile Devices
          </h1>
          <p className="text-center">Go to Desktop mode.</p>
        </div>
      )}
    </>
  );
}

export default App;
