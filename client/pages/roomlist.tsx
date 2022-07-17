import RoomCard from "../components/RoomCard";

const Roomlist = () => {
  return (
    <div className="flex justify-center py-12 px-24">
      <div className="w-2/5">
        <img src="/images/roomchat.svg" alt="chatimage.jpg" />
      </div>
      <div className="w-3/5 pl-2">
        <h1 className="text-2xl font-semibold">Daftar Room Chat</h1>
        <div className="border-2 rounded-xl p-3 my-2">
          <ul>
            <li>
              <RoomCard roomName="Obrolan filsuf" roomMember="10" createdDate="10 Juni 2022" />
            </li>
            <li>
              <RoomCard roomName="Ngobrol tentang game" roomMember="3" createdDate="10 Juni 2022" />
            </li>
            <li>
              <RoomCard roomName="Mabar DOta" roomMember="7" createdDate="10 Juni 2022" />
            </li>
            <li>
              <RoomCard roomName="Bincang Bisnis" roomMember="8" createdDate="10 Juni 2022" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roomlist;
