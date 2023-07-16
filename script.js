window.addEventListener("load", () => {
  const btn = document.querySelector(".botton > span:last-of-type");
  const form = document.querySelector("ul");
  const formLen = document.querySelectorAll("ul > li");
  const btnSection = document.querySelector(".botton");
  const btn2 = document.querySelector(".botton span:first-of-type");
  const formVal = document.querySelectorAll("form > input");
  const pagNum = document.querySelectorAll("#header > div > span ");
  const infoBox = document.querySelector(".print");
  const infoBoxMess = document.querySelector(".print > h3");
  const closeScreen = document.querySelector(".print > div");
  const block = document.querySelector("#container > div:first-of-type");
  const planBtn = document.getElementById("btn");
  const planBtnInside = document.querySelector(
    "#planCont > div:last-of-type > #btn > div"
  );
  const monthly = document.querySelector(
    "#planCont > div:last-of-type > div:first-of-type"
  );
  const yerly = document.querySelector(
    "#planCont > div:last-of-type > div:last-of-type"
  );
  const price = document.querySelectorAll(".planType .txt p:nth-child(2)");
  const visible = document.querySelectorAll(".yerlyVisible");
  const addPrice = document.querySelectorAll(".prc1");
  const checkPlan = document.querySelectorAll(".bcolor");
  let checBox = document.querySelectorAll(".cheBox > input");
  let checBoxDiv = document.querySelectorAll(".boxJs");
  let choseCheck = [];
  let left = 0;
  let click = 0;
  let click2 = 0;
  let mORy = "mo";
  let pickPrice = null;
  //   Information Box ================================
  // printMessagge();
  // function printMessagge(msg, num) {
  //   msg =
  //     msg ||
  //     "This web page makes use of form validation. Make sure to Type your Name and Surname and use a valid email and a phone number similar to the one described in the form.";

  //   infoBox.classList.add("message");
  //   block.classList.add("blockFrom");
  //   infoBoxMess.innerHTML = msg;
  //   if (count == 2) count = 0;
  //   closeScreen.onclick = () => {
  //     infoBox.className = "print";
  //     block.classList.remove("blockFrom");
  //     formVal[num].focus();
  //   };
  // }

  //   Information Box ====================e============

  //   Next step and Go back buttons ================================

  (function () {
    "user strict";
    btn.onclick = () => {
      if (click < formLen.length - 2 && formValidation()) {
        pageNumBackGround(click, 1);
        click++;
        left += 350;
        form.style.left = "-" + `${left}` + "px";
        if (click == formLen.length - 2) {
          btn.innerHTML = "Confirm";
          btn.style.backgroundColor = "hsl(243, 100%, 62%)";
          setFinalPrice();
        }
        if (click == 1) {
          planType[0].classList.add("bcolor");
          pickPrice = planType[0].getAttribute("value");
        }
      } else if (click < formLen.length - 1) {
        left += 350;
        form.style.left = "-" + `${left}` + "px";
        btnSection.className = "display";
      }
      if (click >= 1) {
        btn2.style.color = "hsl(231, 11%, 63%)";
        backBtn();
      }
    };

    function backBtn() {
      btn2.onclick = () => {
        if (click > 0) {
          left = left - 350;
          form.style.left = "-" + `${left}` + "px";
          click--;
          pageNumBackGround(click, 2);
        }
        if (click < 1) {
          btn2.style.color = "hsl(0, 0%, 100%)";
        }

        if (click == 2) {
          btn.innerHTML = "Next Step";
          btn.style.backgroundColor = "hsl(213, 96%, 18%)";
        }
      };
    }
  })();

  function pageNumBackGround(cllickNum, call) {
    switch (call) {
      case 2:
        if (cllickNum == 2) {
          pagNum[cllickNum + 1].classList = "pNum";
          pagNum[cllickNum].classList.add("pageNum");
        } else if (cllickNum >= 0) {
          pagNum[cllickNum + 1].classList = "pNum";
          pagNum[cllickNum].classList.add("pageNum");
        }
        break;

      default:
        if (cllickNum == 0) {
          pagNum[cllickNum].classList = "pNum";
          pagNum[cllickNum + 1].classList.add("pageNum");
        } else {
          pagNum[cllickNum].classList = "pNum";
          pagNum[cllickNum + 1].classList.add("pageNum");
        }
    }
  }
  //  End of  Next step and Go back buttons ================================

  //  Form Validation ======================================================
  function formValidation() {
    //   var emp = [];
    //   for (var i = 0; i < formVal.length; i++) {
    //     if (formVal[i].value == "") {
    //       emp.push(formVal[i].value);
    //     }
    //   }
    //   empty();
    //   function empty() {
    //     if (
    //       formVal[0].value == "" &&
    //       formVal[1].value == "" &&
    //       formVal[2].value == ""
    //     ) {
    //       printMessagge("Make sure to fill in the form");
    //     } else {
    //       checkEmpty();
    //     }
    //   }
    //   function checkEmpty() {
    //     for (var i = 0; i < formVal.length; i++) {
    //       if (formVal[i].value == "") {
    //         printMessagge("Make sure to fill in your " + formVal[i].name, i);
    //         break;
    //       }
    //       if (count == 3) count = 2;
    //     }
    //   }
    //   function checkName() {
    //     value = formVal[0].value;
    //     var condition = value.indexOf(" ") < 0;
    //     if (!condition) {
    //       return true;
    //     } else {
    //       printMessagge("Make sure to fill in Your Name and Surname", 0);
    //     }
    //   }
    //   function checkEamil() {
    //     value = formVal[1].value;
    //     const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    //     if (pass) {
    //       return true;
    //     } else {
    //       printMessagge("Make sure to enter a valid email", 1);
    //     }
    //   }
    //   function checkNumber() {
    //     valueExp = new RegExp(
    //       "^\\+[3]{1}[5]{1}[3]{1}-[0-9]{2}-[0-9]{3}-[0-9]{4}$"
    //     );
    //     if (valueExp.test(formVal[2].value)) {
    //       return true;
    //     } else {
    //       printMessagge("Make sure to enter a valid Phone Number", 2);
    //     }
    //   }
    //   if (emp.length == 0) {
    //     if (checkName() && checkEamil() && checkNumber()) {
    //       return true;
    //     }
    //   }
    return true;
  }
  //  End of Form Validation ======================================================

  //  Plans Type ==================================================================
  let priceRangeYear = ["$90/yr", "$120/yr", "$150/yr"];
  let priceRangeMonth = ["$9/mo", "$12/mo", "$15/mo"];
  let priceRangeYearAdds = ["$10/yr", "$20/yr", "$20/yr"];
  let priceRangeMonthAdds = ["$1/mo", "$2/mo", "$2/mo"];
  const planType = document.querySelectorAll(".value");
  const finalSum = document.querySelectorAll(".prc2");

  planBtn.onclick = () => {
    for (var i = 0; i < planType.length; i++) {
      planType[i].classList.remove("bcolor");
    }

    choseCheck = [];

    checBox.forEach((box) => {
      box.checked = false;
    });

    if (click2 == 0) {
      planBtnInside.classList.add("transEfect");
      monthly.classList.add("color");
      yerly.classList.remove("color");
      visible.forEach((p) => {
        p.style.display = "block";
      });
      changePrice();
    }

    function changePrice() {
      let prcs = [];
      let prcsAdd = [];
      let prcTimes = 0;
      switch (click2) {
        case 0:
          prcs = priceRangeYear;
          prcsAdd = priceRangeYearAdds;
          prcTimes = 10;
          mORy = "yr";
          break;
        default:
          prcs = priceRangeMonth;
          prcsAdd = priceRangeMonthAdds;
          prcTimes = 0.1;
          mORy = "mo";
      }
      for (var i = 0; i <= 2; i++) {
        price[i].innerHTML = prcs[i];
        addPrice[i].innerHTML = prcsAdd[i];
        finalSum[i].innerHTML = prcsAdd[i];
        planType[i].setAttribute(
          "value",
          planType[i].getAttribute("value") * prcTimes
        );
        checBox[i].setAttribute(
          "value",
          checBox[i].getAttribute("value") * prcTimes
        );
      }
    }

    if (click2 == 1) {
      planBtnInside.classList.remove("transEfect");
      monthly.classList.remove("color");
      yerly.classList.add("color");
      visible.forEach((p) => {
        p.style.display = "none";
      });
      changePrice();
    }
    click2++;

    if (click2 == 2) click2 = 0;
  };

  (function () {
    "user strict";
    planType.forEach((plan) => {
      plan.addEventListener("click", function () {
        planType[0].classList.add("bcolor");
        pickPrice = planType[0].getAttribute("value");
        for (var i = 0; i < planType.length; i++) {
          planType[i].classList.remove("bcolor");
        }
        pickPrice = this.getAttribute("value");
        plan.classList.add("bcolor");
      });
    });
  })();

  //  End of Plans Type ===========================================================

  checBoxDiv.forEach((box) => {
    box.addEventListener("click", function () {
      let atrr = this.getAttribute("value");
      let atrrName = document.getElementById(atrr);

      if (atrrName.checked == false) {
        document.getElementById(atrr).checked = true;
        choseCheck.push(atrrName.value);
        box.classList.add("dcolor");
        let disp = document.querySelector("." + atrrName.name);
        disp.classList.remove("display");
      } else {
        document.getElementById(atrr).checked = false;
        box.classList.remove("dcolor");
        choseCheck.splice(choseCheck.indexOf(atrrName.value), 1);
      }
    });
  });

  const finalPrice = document.querySelectorAll(".prc2");

  function setFinalPrice() {
    let sum = 0;
    finalPrice[0].innerHTML = "&nbsp $" + `${pickPrice}` + "/" + mORy;
    for (var i = 0; i < choseCheck.length; i++) {
      sum += Number(choseCheck[i]);
    }
    choseCheck;
  }
});
