
var total = 0;
var totalCount = 0;
var menu_list = {
  burger1 : { price : 3500, count : 0 },
  burger2 : { price : 6900, count : 0 },
  burger3 : { price : 6900, count : 0 },
  burger4 : { price : 6900, count : 0 },
  burger5 : { price : 6900, count : 0 },
  burger6 : { price : 6900, count : 0 },
  burger7 : { price : 6900, count : 0 },
  burger8 : { price : 6900, count : 0 },
  burger9 : { price : 6900, count : 0 },

  drink1 : { price : 2000, count : 0 },
  drink2 : { price : 2000, count : 0 },
  drink3 : { price : 3500, count : 0 },
  drink4 : { price : 5500, count : 0 },
  drink5 : { price : 2000, count : 0 },

  sideMenu1 : { price : 3000, count : 0 },
  sideMenu2 : { price : 3900, count : 0 },
  sideMenu3 : { price : 2000, count : 0 },
  sideMenu4 : { price : 2000, count : 0 },
  sideMenu5 : { price : 3900, count : 0 },
  sideMenu6 : { price : 3700, count : 0 },
  sideMenu7 : { price : 2000, count : 0 },
  sideMenu8 : { price : 500, count : 0 }
};

function buy(elem){
  let product = elem.id;
  console.log(elem);
  console.log(elem.id);

  total += menu_list[product].price;
  menu_list[product].count++;

  let items = document.querySelector(".shopcart");
  items.innerHTML = "";

  for(let i = 0; i < Object.keys(menu_list).length; i++)
  {
    let tmp = Object.keys(menu_list);
    let n = menu_list[[tmp[i]]];

    if (n.count > 0)
    {
      items.innerHTML += "<div class='menuList'>" 
      + "<span class='menu'>" + MenutransKO(tmp[i]) + "</span>"
      + "<span class='amount'>" + n.count + "개" + "</span>"
      + "<span class='price'>" + (n.count * n.price) + "원" + "</span>"
      + "<button onClick='deleteMenu(this);'>X</button>" + "</div>";
    }
  }

  document.querySelector("#result").innerHTML = total + "원";
  
}

function deleteMenu(menu){
  let product = MenutransEN(menu.parentNode.firstChild.innerHTML);

  menu_list[product].count -= 1;

  if(menu_list[product].count < 0)
  {
    menu_list[product].count = 0;
  }
  else if(menu_list[product].count == 0) {
    menu.parentNode.remove();
    total -= menu_list[product].price;
  }
  else {
    total -= menu_list[product].price;
  }
  menu.previousSibling.innerHTML = menu_list[product].count * menu_list[product].price + "원";
  menu.previousSibling.previousSibling.innerHTML = menu_list[product].count + "개";
  
  document.querySelector("#result").innerHTML = total + "원";
}

function allDelete(){
document.querySelector(".shopcart").innerHTML = "";

for(let i = 0; i < Object.keys(menu_list).length; i++)
{
  let tmp = Object.keys(menu_list);
  let n = menu_list[[tmp[i]]];
  console.log('n = ' + n);

  n.count = 0;
}

total = 0;
document.querySelector("#result").innerHTML = 0 + "원";
}


function MenutransKO(product){
  let resultString = "";

  switch(product){
    case "burger1":
      resultString = "군대리아버거";
      break;
    case "burger2":
      resultString = "춘천닭갈비버거";  
      break;
    case "burger3":
      resultString = "광양불고기버거";
      break;
    case "burger4":
      resultString = "유학생치즈버거";
      break;
    case "burger5":
      resultString = "늑대치킨버거";
      break;
    case "burger6":
      resultString = "호텔조식버거";
      break;
    case "burger7":
      resultString = "쉡&쉡버거";
      break;
    case "burger8":
      resultString = "미COOK버거";
      break;
    case "burger9":
      resultString = "수제떡갈비버거";
      break;
    
    case "drink1":
      resultString = "콜라";
      break;
    case "drink2":
      resultString = "사이다";
      break;
    case "drink3":
      resultString = "레몬에이드";
      break;
    case "drink4":
      resultString = "밀크쉐이크";
      break;
    case "drink5":
      resultString = "아메리카노";
      break;
      
    case "sideMenu1":
      resultString="외계인오징어";
      break;
    case "sideMenu2":
      resultString="버팔로콤보[5ea]";
      break;
    case "sideMenu3":
      resultString="모짜치즈스틱";
      break;
    case "sideMenu4":
      resultString="크리스피감자튀김";
      break;
    case "sideMenu5":
      resultString="미트칠리감자튀김";
      break;
    case "sideMenu6":
      resultString="어니언치폴레감자튀김";
      break;
    case "sideMenu7":
      resultString="수제코우슬로";
      break;
    case "sideMenu8":
      resultString="HOT빅뱅소스";
      break;
  }

  return resultString;
}

function MenutransEN(product){
  let resultString = "";

  switch(product){
    case "군대리아버거":
      resultString = "burger1";
      break;
    case "춘천닭갈비버거":
      resultString = "burger2";  
      break;
    case "광양불고기버거":
      resultString = "burger3";
      break;
    case "유학생치즈버거":
      resultString = "burger4";
      break;
    case "늑대치킨버거":
      resultString = "burger5";
      break;
    case "호텔조식버거":
      resultString = "burger6";
      break;
    case "쉡&amp;쉡버거":
      resultString = "burger7";
      break;
    case "미COOK버거":
      resultString = "burger8";
      break;
    case "수제떡갈비버거":
      resultString = "burger9";
      break;
    
    case "콜라":
      resultString = "drink1";
      break;
    case "사이다":
      resultString = "drink2";
      break;
    case "레몬에이드":
      resultString = "drink3";
      break;
    case "밀크쉐이크":
      resultString = "drink4";
      break;
    case "아메리카노":
      resultString = "drink5";
      break;
      
    case "외계인오징어":
      resultString="sideMenu1";
      break;
    case "버팔로콤보[5ea]":
      resultString="sideMenu2";
      break;
    case "모짜치즈스틱":
      resultString="sideMenu3";
      break;
    case "크리스피감자튀김":
      resultString="sideMenu4";
      break;
    case "미트칠리감자튀김":
      resultString="sideMenu5";
      break;
    case "어니언치폴레감자튀김":
      resultString="sideMenu6";
      break;
    case "수제코우슬로":
      resultString="sideMenu7";
      break;
    case "HOT빅뱅소스":
      resultString="sideMenu8";
      break;
  }

  return resultString;
}

function orderRequest(){
  alert(total+"원 결제되었습니다.");
  allDelete();
}