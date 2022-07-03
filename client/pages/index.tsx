import React from "react";
import Typewriter from "typewriter-effect";

const Index = () => {
  return (
    <div className="flex justify-center items-center py-12 px-24">
      <div className="w-2/5">
        <img src="/images/landingpage1.svg" alt="chatimage.jpg" />
      </div>
      <div className="w-3/5 pl-2">
        <div className="text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["Chatting rame-rame ?", "Kenalan orang baru?"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <p className="my-6 mr-6">
          Chatting dan kenalan dengan orang baru, mau{" "}
          <span className="text-main font-bold text-xl">rame-rame</span> atau{" "}
          <span className="text-main font-bold text-xl">PvP random</span> bebas
          semaumu. Buat room sekarang, login sebagai{" "}
          <span className="text-main font-bold text-xl">anonymous</span> tanpa
          perlu mendaftar. Segera gabung ke suasana ngobrol yang seru tanpa
          batas dan tanpa langganan
        </p>
        <div>
          <button className="bg-main text-white text-semibold py-2 px-4 rounded-full mx-1">Chat Random</button>
          <button className="bg-main text-white text-semibold py-2 px-4 rounded-full mx-1">Chat Room</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
