const tteoks = [
    {
      brand: "엽기떡볶이",
      menu: "로제 떡볶이",
    },
    {
      brand: "엽기떡볶이",
      menu: "엽기 떡볶이 오리지널",
    },
    {
      brand: "배떡",
      menu: "로제 떡볶이",
    },
    {
      brand: "배떡",
      menu: "분모자 떡볶이",
    },
    {
      brand: "삼첩분식",
      menu: "바질크림 떡볶이",
    },
    {
      brand: "우리할매떡볶이",
      menu: "가래떡 떡볶이",
    },
    {
      brand: "우리할매떡볶이",
      menu: "로제 떡볶이",
    },
    {
      brand: "삼첩분식",
      menu: "마라로제 떡볶이",
    },
    {
      brand: "신전떡볶이",
      menu: "치즈떡볶이",
    },
    {
      brand: "응떡",
      menu: "응급실 국물 떡볶이",
    },
    {
      brand: "마포구",
      menu: "마포 원조 떡볶이",
    },
    {
      brand: "애플하우스",
      menu: "일반 떡볶이에 무침 군만두",
    },
    {
      brand: "갈현시장",
      menu: "할머니 떡볶이",
    },
    {
      brand: "루비 떡볶이",
      menu: "새우낑 떡볶이",
    },
    {
      brand: "덕자네 방앗간",
      menu: "수제 떡볶이",
    },
    {
      brand: "맛나분식",
      menu: "떡볶이",
    },
  ];

const brand = document.querySelector(".todayof span:nth-child(2)");
const menu = document.querySelector(".todayof span:nth-child(4)");

const todayTteok = tteoks[Math.floor(Math.random() * tteoks.length)];
brand.innerText = `${todayTteok.brand}`;
menu.innerText = `${todayTteok.menu}`;
 
