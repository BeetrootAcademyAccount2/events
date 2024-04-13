const btn = document.getElementById("btn");

const itemList = document.querySelectorAll("ul li");

const list = document.querySelector(".list");

const ancestor = document.querySelector(".ancestor");

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

function sayHello() {
  alert("Hello");
}

// btn.onclick = sayHello;

// btn.addEventListener("click", () => {
//   sayHello();
// });

// btn.addEventListener("dblclick", () => {
//   alert("Double Click");
// });

ancestor.addEventListener("click", () => {
  console.log("Ancestor Bubbling");
});

parent.addEventListener("click", () => {
  console.log("Parent Bubbling");
});

child.addEventListener("click", (event) => {
  console.log("Child Bubbling");
  event.stopPropagation();
});

ancestor.addEventListener(
  "click",
  () => {
    console.log("Ancestor Capture");
  },
  {
    capture: true,
  }
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capture");
  },
  {
    capture: true,
  }
);

child.addEventListener(
  "click",
  () => {
    console.log("Child Capture");
  },
  {
    capture: true,
  }
);

// document.body.addEventListener("click", () => {
//   console.log("------");
// });

/*
itemList.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // item.style.backgroundColor === "yellow"
    //   ? (item.style.backgroundColor = "white")
    //   : (item.style.backgroundColor = "yellow");

    item.classList.add("highlight");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("highlight");
  });
});
*/

/*
list.addEventListener("click", (event) => {
  console.log(event.target);
  const liItem = event.target.closest("li");
  const itemX = document.createElement("li");
  itemX.innerText = "Item X";
  liItem.replaceWith(itemX);

  //   liItem.remove();
  //   liItem.classList.toggle("highlight");
});
*/
