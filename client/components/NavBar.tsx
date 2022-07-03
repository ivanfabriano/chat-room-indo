import {
  LocalMallRounded,
  NewspaperRounded,
  MeetingRoomRounded,
  LoginRounded,
} from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-main text-white">
      <div className="w-26 flex">
        <div>
          <div className="px-4 py-1 font-semibold border-2 rounded-full mx-1">
            <LocalMallRounded className="mr-1" /> Toko
          </div>
        </div>
        <div>
          <div className="px-4 py-1 font-semibold border-2 rounded-full mx-1">
            <NewspaperRounded className="mr-1" />
            Artikel
          </div>
        </div>
      </div>
      <div className="w-26 font-bold text-2xl px-8">ChatIndo</div>
      <div className="w-26 flex">
        <div>
          <div className="px-4 py-1 font-semibold border-2 rounded-full mx-1">
            Room
            <MeetingRoomRounded className="ml-1" />
          </div>
        </div>
        <div>
          <div className="px-4 py-1 font-semibold border-2 rounded-full mx-1">
            Login
            <LoginRounded className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
