import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PopoverCustom: React.FC<{
  setDataCookie: (e: any) => void;
  setIsDataCookie: (e: boolean) => void;
}> = ({ setDataCookie, setIsDataCookie }) => {
  const router = useRouter();
  const userStorate = localStorage.getItem("user");
  const dataCookie = userStorate && JSON.parse(userStorate);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogOut = () => {
    router.push("/");
    localStorage.removeItem("user");
    setDataCookie(null);
    setIsDataCookie(false);
  };
  return (
    <div>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {dataCookie && dataCookie?.role?.role === "Admin" && (
            <MenuItem onClick={handleClose}>
              <Link href="/admin/bao-cao-thong-ke">Trang quản trị</Link>
            </MenuItem>
          )}
          {dataCookie && dataCookie?.role?.role !== "Admin" && (
            <MenuItem onClick={handleClose}>
              <Link href="/new-story">Trang cá nhân</Link>
            </MenuItem>
          )}
          <MenuItem onClick={() => handleLogOut()}>Đăng xuất</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default PopoverCustom;
