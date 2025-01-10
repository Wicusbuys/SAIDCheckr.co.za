import Background from "@/components/Background";
import Validator from "@/components/Validator";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative h-screen w-full">
        <Background/>
        <div className="section validator absolute inset-0 z-10">
          <Validator />
        </div>
      </div>
    </main>
  );
}
