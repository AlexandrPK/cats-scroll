import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Loader from "./components/Loader";

function App() {
  const PAGE_NUMBER = 3;

  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(`https://aws.random.cat/meow`);

      setCoinsData((prev) => {
        return [...prev, response];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div class="bg-white dark:bg-gray-800">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl ">
          <List catsData={coinsData}></List>
        </div>
        {loading && <Loader/>}
      </section>
    </div>
  );
}

export default App;
