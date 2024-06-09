"use client";
import { Avatar } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { Divider } from "@mui/joy";

const NewPost: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleClick = (val: number) => {
    setValue(val);
  };
  return (
    <>
      <div className="max-w-[1336px] m-auto block mt-10">
        <div className="justify-evenly flex-row flex">
          <div className="flex-auto block md:min-w-[368px] md:max-w-[368px]">
            <div className="flex justify-center mb-5">
              <Avatar sx={{ width: 80, height: 80 }}>H</Avatar>
            </div>
            <Divider component="li" />
            <div>
              <MenuList>
                <MenuItem onClick={() => handleClick(0)}>
                  <ListItemText>Thông tin chung</ListItemText>
                </MenuItem>
                <Divider component="li" />
                <MenuItem onClick={() => handleClick(1)}>
                  <ListItemText>Bài viết đã lưu</ListItemText>
                </MenuItem>
                <Divider component="li" />
                <MenuItem onClick={() => handleClick(2)}>
                  <ListItemText>Bài viết đã xem</ListItemText>
                </MenuItem>
                <Divider component="li" />
              </MenuList>
            </div>
          </div>
          <div className="lg:min-w-[728px] lg:max-w-[728px] block min-h-[100vh] pr-6 box-border bg-white em">
            <div className="relative inline-block w-full h-full">
              <div className="sticky mt-0 top-0">
                {value === 0 && (
                  <div
                    className="flex-col flex"
                    style={{ minHeight: "calc(-57px + 100vh)" }}
                  >
                    Thông tin
                  </div>
                )}
                {value === 1 && (
                  <div
                    className="flex-col flex"
                    style={{ minHeight: "calc(-57px + 100vh)" }}
                  >
                    Bài viết đã lưu
                  </div>
                )}
                {value === 2 && (
                  <div
                    className="flex-col flex"
                    style={{ minHeight: "calc(-57px + 100vh)" }}
                  >
                    Bài viết đã xem
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
