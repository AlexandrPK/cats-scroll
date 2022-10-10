import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cart from "./components/Card";
import List from "./components/List";

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
    }, 1000);
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
    <div class="bg-white dark:bg-gray-900">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl ">
          <List catsData={coinsData}></List>
        </div>
      </section>
    </div>
  );
}

export default App;
