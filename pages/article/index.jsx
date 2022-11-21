import React, { useState, useEffect } from "react";
import Link from "next/link";

const Index = () => {
  const [articles, setArticles] = useState([
    {
      attributes: {
        text: "",
      },
    },
  ]);
  const getArticles = async () => {
    fetch(`http://106.52.86.38:1337/api/blogs`, {
      headers: {
        //设置请求token
        Authorization:
          "bearer 750a178739729b9dcc993c5f52895976ca357d13aa3cbaa791df40466e8327e668345788f7f621768e262b29d9d054e09ef6ca6d8d69e96e73043eb546f9f03a0c1a435b06b24577fbd1b75e798187d1790cfc27786cf407b96236af3777a4e7b5a203fe4e72b2af48bdf93a000c79ee1403aef47ff6214620686c6bd3c3d495",
      },
    })
      .then((res) => {
        res
          .json()
          .then((data) => {
            setArticles(data.data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
    return () => {};
  }, []);

  return (
    <div className=" w-screen h-screen flex">
      <ul className=" w-1/5 flex flex-col bg-blue-400">
        {articles.map((item, index) => {
          if (item.id != undefined)
            return (
              <Link
                className=" h-10 flex items-center justify-center"
                href={`/article/${item.id}`}
                key={item.id}
              >
                {item.attributes.text.split("#")[1] != undefined
                  ? item.attributes.text.split("#")[1].split("\n")[0]
                  : null}
              </Link>
            );
        })}
      </ul>
      <div className="w-full bg-red-200">23</div>
    </div>
  );
};

export default Index;
