import { formatDate, formatDateHourMinute } from "@/lib/format";
import { Divider } from "@mui/joy";
import { Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Notification from "./Notification";

const CardIndex: React.FC<{
  data: [] | never[];
  isStyle?: boolean;
  setIsRefresh: () => void;
}> = ({ data, isStyle = false, setIsRefresh }) => {
  const [dataCookie, setDataCookie] = useState<null | any>(null);
  const [openNoti, setOpenNoti] = useState(false);
  const [message, setMessage] = useState("");
  const paramId = useParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userStorate = localStorage.getItem("user");
      if (userStorate) {
        try {
          setDataCookie(JSON.parse(userStorate));
        } catch (error) {
          console.error(
            "Lỗi khi phân tích dữ liệu JSON từ localStorage:",
            error
          );
          setDataCookie(null);
        }
      }
    }
  }, []);

  const handleBookmask = async (type: string) => {
    const memberId = JSON.parse(localStorage.getItem("user") as any);
    const resp = await fetch("http://localhost:8080/user/save", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleId: paramId?.id,
        memberId: memberId?.member?.id,
        type: type,
      }),
    })
      .then((result) => result.json())
      .catch((e) => console.log(e));

    if (resp.statusCode !== 200) {
      setOpenNoti(true);
      setMessage(resp?.message || resp?.data?.message);
    }

    if (resp.statusCode === 200) {
      setOpenNoti(true);
      setMessage(resp?.message || resp?.data?.message);
      setIsRefresh();
    }
  };

  const handleCloseNoti = () => {
    setOpenNoti(false);
    setMessage("");
  };

  return (
    <>
      <Notification
        open={openNoti}
        handleCloseNoti={handleCloseNoti}
        message={message}
      />
      <div className={`${isStyle ? "" : "pt-8"} block`}>
        <div>
          <div
            className={`max-h-[82vh] ${
              isStyle ? "scroll-visible !pl-0" : "scroll-visible"
            }`}
          >
            {data.length > 0 &&
              data.map((el: any) => (
                <article key={el.id || Math.floor(Math.random() * 1000)}>
                  <div className="box-content mr-auto ml-auto block">
                    <div className="justify-center flex ">
                      <div
                        className={`lg:max-w-[680px] mx-6 min-w-0 w-full ${
                          isStyle ? "ml-0" : ""
                        }`}
                      >
                        <div className="w-full h-full">
                          <div className="block">
                            <div className="flex items-center">
                              <div>
                                <Link href={`/article/${el.id}`}>
                                  <div>
                                    <Chip
                                      label={(el.topics && el.topics[0]) || ""}
                                      className="bg-[#f17b7b] text-white"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="w-full ml-2 flex flex-nowrap">
                                <div className="flex text-sm">
                                  {formatDate(el.publicationDate * 1000)}
                                </div>
                                <div className="flex-auto block text-sm ml-1">
                                  {formatDateHourMinute(
                                    el.publicationDate * 1000
                                  )}
                                </div>
                                <div className="cursor-pointer">
                                  {dataCookie &&
                                  dataCookie?.member?.savedArticles?.length >
                                    0 &&
                                  dataCookie?.member?.savedArticles?.includes(
                                    el.id
                                  ) ? (
                                    <BookmarkIcon onClick={() => handleBookmask("save")} />
                                  ) : (
                                    <>
                                      {!dataCookie ? (
                                        ""
                                      ) : (
                                        <BookmarkBorderIcon onClick={() => handleBookmask("unsave")} />
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 block">
                              <div className="block">
                                <div className="relative block">
                                  <div className="block">
                                    <div>
                                      <div className="flex">
                                        <div
                                          className="flex-auto block w-9/12"
                                          style={{ wordBreak: "break-word" }}
                                        >
                                          <div className="block">
                                            <Link href={`/article/${el.id}`}>
                                              <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                                {el.title}
                                              </div>
                                              <div className="block">
                                                <p className="jy max-h-28 leading-5 visible gg ge gd overflow-hidden text-base tracking-normal">
                                                  {el.description}
                                                </p>
                                              </div>
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="lg:ml-14 block ">
                                          <Link href={`/article/${el.id}`}>
                                            <Image
                                              alt="image"
                                              src={
                                                el.images &&
                                                el.images.length > 0
                                                  ? el?.images[0].url
                                                  : "/No_Image_Available.jpg"
                                              }
                                              width={112}
                                              height={112}
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Divider component="li" className="my-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardIndex;
