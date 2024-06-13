import ActiveUserChart from "@/components/ActiveUserChart";
import General from "@/components/General";
import { Grid } from "@mui/material";

const ReportChart: React.FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 0.5, md: 1 }}
      justifyItems="center"
      sx={{
        "& .MuiButtonBase-root": { display: "none" },
        "& .MuiInputBase-root": { width: "125px" },
      }}
    >
      <Grid item xs={12} md={6} alignItems="center">
        <General title=" TỔNG USER ĐĂNG KÝ MỚI" total={3121} />
      </Grid>
      <Grid item xs={12} md={6}>
        <General title="TỔNG BÀI VIẾT ĐĂNG MỚI" total={2321} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <div
          className="p-4 bg-white rounded-[4px]"
          style={{ overflow: "auto" }}
        >
          <ActiveUserChart
            className="min-w-[500px]"
            title="Người dùng đang hoạt độngss"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <div
          className="p-4 bg-white rounded-[4px]"
          style={{ overflow: "auto" }}
        >
          chart
        </div>
      </Grid>
    </Grid>
  );
};

export default ReportChart;
