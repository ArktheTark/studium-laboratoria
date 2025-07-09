"use strict";

let test_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

const getMeal = async function () {
  const response = await fetch(test_url).then((data) => data.json());
  console.log(response);
};

getMeal();
