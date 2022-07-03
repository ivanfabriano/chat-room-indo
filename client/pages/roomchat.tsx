import { Person } from "@mui/icons-material";

const Roomchat = () => {
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
              <div className="flex items-center">
                <div className="w-2/3">
                  <p className="text-sm">10 Juni 2022</p>
                  <p className="font-semibold">Room Indo Gaming</p>
                </div>
                <div className="w-1/3 flex justify-end items-center">
                  <p className="flex items-center text-gray-500 mr-2">
                    2<Person/>
                  </p>
                  <button className="py-1 px-2 bg-main font-semibold text-white rounded-lg">
                    Join Room
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roomchat;
