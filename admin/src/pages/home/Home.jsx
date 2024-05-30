import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { api, BASE_URL } from "../../constants";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState, useCallback } from "react";



function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  const getStats = useCallback(async () => {
    try {

      const headers = {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      };

      const response = await api().get(`${BASE_URL}/users/stats`, { headers });
      const statsList = response.data.sort(function (a, b) {
        return a._id - b._id;
      });
      statsList.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New User": item.total },
        ])
      );
    } catch (error) {
      console.error(error);
    }
  }, [MONTHS]);

  useEffect(() => {
    getStats();
  }, [getStats]);



  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}


export default Home;