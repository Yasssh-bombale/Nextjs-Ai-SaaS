import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-screen relative">
      {/* sidebar */}
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0  bg-gray-900 text-white">
        <Sidebar isPro={isPro!} apiLimitCount={apiLimitCount} />
      </div>

      {/* main */}
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
