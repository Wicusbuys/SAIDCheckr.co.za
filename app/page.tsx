import Background from "@/components/Background";
import Explanation from "@/components/Explanation";
import Validator from "@/components/Validator";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative h-screen w-full">
        <Background/>
        <div className="h-full absolute inset-0 z-10">
          <Validator />
        </div>
      </div>
      <div className="h-full">
        <Explanation />
      </div>
    </main>
  );
}
