import { Person } from "@mui/icons-material";

const RoomCard = ({roomName, roomMember, createdDate}: any) => {
  return (
    <div>
      <div className="flex items-center mx-1 my-4">
        <div className="w-2/3">
          <p className="text-sm">{createdDate}</p>
          <p className="font-semibold">{roomName}</p>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <p className="flex items-center text-gray-500 mr-2">
            {roomMember}<Person />
          </p>
          <button className="py-1 px-2 bg-main font-semibold text-white rounded-lg">
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
