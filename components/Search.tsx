"use client";
import {
  Box,
  CircularProgress,
  IconButton,
  InputBase,
  Pagination,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import CardIndex from "./CardIndex";
import { useForm, Controller } from "react-hook-form";

const Search: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const resp = await fetch(`/api/article`)
      .then((res) => res.json())
      .catch((e) => console.log(e));

    setData(resp || []);
    setIsLoading(false);
  };

  const onSubmit = handleSubmit((data) => {
    if (!data.search) return;
    getData();
  });

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          marginLeft: "14px",
          boxShadow: "none",
          border: "1px solid rgba(202, 198, 198, 0.5)",
          borderRadius: "20px",
          height: "42px",
          marginTop: "16px",
        }}
      >
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
              {...field}
            />
          )}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={onSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: "50px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CardIndex data={data} />
          {data.length > 0 && (
            <div className="block justify-end">
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                className="block justify-end"
                color="primary"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Search;
