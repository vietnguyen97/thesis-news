/* eslint-disable react/no-unescaped-entities */
// import { formatDate, formatDateHourMinute } from "@/lib/format";
import { Divider } from "@mui/joy";
import { Chip } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const HightRate: React.FC<{ isStyle?: string }> = ({ isStyle = false }) => {
  return (
    <div className="flex-auto block">
      <div className="mt-10 block">
        <div className="mb-5 block">Bài viết liên quan</div>
        <article key={Math.floor(Math.random() * 1000)}>
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
                        <Link href={`/`}>
                          <div>
                            <Chip
                              label="Thế giới"
                              className="bg-[#f17b7b] text-white"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="w-full ml-2 flex flex-nowrap">
                        <div className="flex text-sm">24/1/2022</div>
                        <div className="flex-auto block text-sm ml-1">
                          7:00 PM
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
                                    <Link href={`/`}>
                                      <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                        Thỏa thuận có thể định đoạt khủng hoảng
                                        Ukraine
                                      </div>
                                    </Link>
                                  </div>
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
        <article key={Math.floor(Math.random() * 1000)}>
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
                        <Link href={`/`}>
                          <div>
                            <Chip
                              label="Kinh doanh"
                              className="bg-[#f17b7b] text-white"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="w-full ml-2 flex flex-nowrap">
                        <div className="flex text-sm">24/1/2022</div>
                        <div className="flex-auto block text-sm ml-1">
                          6:37 PM
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
                                    <Link href={`/`}>
                                      <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                        Tập đoàn lớn thứ ba Hàn Quốc đầu tư điện
                                        mặt trời ở Việt Nam
                                      </div>
                                    </Link>
                                  </div>
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
        <article key={Math.floor(Math.random() * 1000)}>
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
                        <Link href={`/`}>
                          <div>
                            <Chip
                              label="Bất động sản"
                              className="bg-[#f17b7b] text-white"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="w-full ml-2 flex flex-nowrap">
                        <div className="flex text-sm">24/1/2022</div>
                        <div className="flex-auto block text-sm ml-1">
                          8:33 PM
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
                                    <Link href={`/`}>
                                      <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                        Lệch cung cầu nhà ở Hà Nội
                                      </div>
                                    </Link>
                                  </div>
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
        <article key={Math.floor(Math.random() * 1000)}>
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
                        <Link href={`/`}>
                          <div>
                            <Chip
                              label="Khoa học"
                              className="bg-[#f17b7b] text-white"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="w-full ml-2 flex flex-nowrap">
                        <div className="flex text-sm">24/1/2022</div>
                        <div className="flex-auto block text-sm ml-1">
                          12:28 AM
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
                                    <Link href={`/`}>
                                      <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                        GS.VS Nguyễn Văn Hiệu trong ký ức học
                                        trò
                                      </div>
                                    </Link>
                                  </div>
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
        <article key={Math.floor(Math.random() * 1000)}>
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
                        <Link href={`/`}>
                          <div>
                            <Chip
                              label="Giải trí"
                              className="bg-[#f17b7b] text-white"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="w-full ml-2 flex flex-nowrap">
                        <div className="flex text-sm">24/1/2022</div>
                        <div className="flex-auto block text-sm ml-1">
                          1:27 PM
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
                                    <Link href={`/`}>
                                      <div className="lg:mb-2 block cursor-pointer font-bold tracking-tight text-base lg:max-h-[72px] leading-6 overflow-hidden gd ge gg">
                                        Eileen Gu: 'Khỏe khoắn là đẹp'
                                      </div>
                                    </Link>
                                  </div>
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
      </div>
    </div>
  );
};

export default HightRate;
