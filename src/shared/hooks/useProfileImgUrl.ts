import axios from "axios";
import { useEffect, useState } from "react";

interface IUserProfilePhotos {
  result: {
    photos: [[{ file_id: string }]];
  };
}
interface IFilePath {
  result: {
    file_path: string;
  };
}

export function useProfileImgUrl() {
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const BOT_TOKEN = "5406344740:AAFapqnzcbYisvxN6zxRKr8TilrThGQ6k48";

  const getFileId = async (userId: number) => {
    const res = await axios.get<IUserProfilePhotos>(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUserProfilePhotos?user_id=${userId}
`,
    );
    console.log(res.data.result.photos[0][0].file_id);
    return res.data.result.photos[0][0].file_id;
  };
  const getFilePath = async (file_id: string) => {
    const res = await axios.get<IFilePath>(
      `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${file_id}`,
    );
    return res.data.result.file_path;
  };
  const setImgUrl = async (userId: number) => {
    const fileId = await getFileId(userId);
    console.log(fileId);
    const filePath = await getFilePath(fileId);
    const imgUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;
    setProfileImg(imgUrl);
  };

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const telegram_user = window.Telegram.WebApp.initDataUnsafe.user;
      if (!telegram_user?.id) {
        return;
      }
      setImgUrl(telegram_user?.id);
    }
  }, [window.Telegram?.WebApp]);
  return profileImg ?? "";
}
