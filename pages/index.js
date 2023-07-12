import Feed from "@/components/Feed";
import Login from "@/components/Login";
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import { AppContext } from "@/contexts/AppContext";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [appContext] = useContext(AppContext);

  if (!session) return <Login />;

  return (
    <div>
      <title>Twitter Clone</title>
      <h1 className="text-xl font-bold">Hello World</h1>
      <meta name="description" content="Generated by create next app" />

      <main className="relative max-w-[1400px]" mx-auto>
        <Sidebar />
        <div className="flex gap-6">
          <Feed />
          <Trending />
          {appContext?.isModalOpen && <Modal />}
        </div>
      </main>
    </div>
  );
}
