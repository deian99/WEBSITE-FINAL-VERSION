let filters = [
  "AI",
  "ART",
  "BIOTECH",
  "BUSINESS",
  "CLOTHING",
  "COMMUNICATION",
  "CONSTRUCTION",
  "GADGETS",
  "HOME",
  "PRIVACY",
  "PRODUCTION",
  "ROBOTS",
  "SOCIETY",
  "TRANSPORT",
  "WORK",
];

let whatsNewPosts = [
  {
    title: "BMW Concept",
    year: "2030",
    city: "Munchen",
    author: "Bayerische Motoren Werke AG",
  },
  {
    title: "New World Concept",
    year: "2050",
    city: "New York",
    author: "Charles Kyivanov",
  },
  {
    title: "Kawasaki Terra",
    year: "2025",
    city: "Geneva",
    author: "Kawasaki Heavy Industries",
  },
  {
    title: "Hydrogen Engine",
    year: "2030",
    city: "Chicago",
    author: "SMVIC",
  },
  {
    title: "Electric Bike Technology Advancement",
    year: "2030",
    city: "Paris",
    author: "Boldura Deian",
  },
];

let userList = [
  {
    userImage: "waterman.jpg",
    userName: "true waterman",
    userLikes: 3241,
  },
  {
    userImage: "kiyvanov.jpg",
    userName: "Charles Kyivanov",
    userLikes: 8565,
  },
  {
    userImage: "deian.jpg",
    userName: "boldura deian",
    userLikes: 1008,
  },
  {
    userImage: "felipe.jpg",
    userName: "felipe pulecio",
    userLikes: 2185,
  },
  {
    userImage: "chris.jpg",
    userName: "chris jones",
    userLikes: 98,
  },
];

let posts = [
  {
    year: "2050",
    city: "SHANGHAI",
    title: "2050 Revolution",
    author: "FELIPE PULECIO",
  },
  {
    year: "2030",
    city: "BANGALORE",
    title: "Major engine advancement",
    author: "chris jones",
  },
  {
    year: "2050",
    city: "RABAT",
    title: "Electronic monarchy",
    author: "earthman",
  },
  {
    year: "2050",
    city: "TOKYO",
    title: "New ways of public transport",
    author: "Deian",
  },
  {
    year: "2050",
    city: "TOKYO",
    title: "New ways of public transport",
    author: "Deian",
  },
  {
    year: "2050",
    city: "RABAT",
    title: "Electronic monarchy",
    author: "earthman",
  },
  {
    year: "2030",
    city: "BANGALORE",
    title: "Major engine advancement",
    author: "chris jones",
  },
  {
    year: "2050",
    city: "SHANGHAI",
    title: "2050 Revolution",
    author: "FELIPE PULECIO",
  },
  {
    year: "2050",
    city: "SHANGHAI",
    title: "2050 Revolution",
    author: "FELIPE PULECIO",
  },
  {
    year: "2030",
    city: "BANGALORE",
    title: "Major engine advancement",
    author: "chris jones",
  },
  {
    year: "2050",
    city: "RABAT",
    title: "Electronic monarchy",
    author: "earthman",
  },
  {
    year: "2050",
    city: "TOKYO",
    title: "New ways of public transport",
    author: "Deian",
  },
  {
    year: "2050",
    city: "TOKYO",
    title: "New ways of public transport",
    author: "Deian",
  },
  {
    year: "2050",
    city: "RABAT",
    title: "Electronic monarchy",
    author: "earthman",
  },
  {
    year: "2030",
    city: "BANGALORE",
    title: "Major engine advancement",
    author: "chris jones",
  },
  {
    year: "2050",
    city: "SHANGHAI",
    title: "2050 Revolution",
    author: "FELIPE PULECIO",
  },
];

function addData() {
  let h3 = document.getElementsByTagName("h3");
  let h2 = document.getElementsByTagName("h2");
  let h4 = document.getElementsByTagName("h4");
  let whatsNew = document.getElementById("whats-new");
  let select = document.getElementById("select-filter");
  let userListDOM = document.getElementById("user-list");
  let option = document.createElement("option");
  let postsTag = document.getElementById("posts");
  let filterSection = document.getElementById("posts-filter");

  for (let i = 0; i < 3; i++) {
    h3[i].innerHTML = createDiv(
      "",
      "",
      whatsNewPosts[i].year + ` &times; ` + whatsNewPosts[i].city
    );
    h2[i].innerHTML = createDiv("", "", whatsNewPosts[i].title);
    h4[i].innerHTML = createDiv("", "", whatsNewPosts[i].author);
  }
  for (let i = 0; i < whatsNewPosts.length; i++) {
    whatsNew.innerHTML += createWhatsNewPosts(
      whatsNewPosts[i].year,
      whatsNewPosts[i].city,
      whatsNewPosts[i].title,
      whatsNewPosts[i].author
    );
  }

  for (let i = 1; i < filters.length; i++) {
    option.value = filters[i];
    option.innerHTML = filters[i];
    select.appendChild(option);
    console.log(select);
  }

  for (let i = 0; i < posts.length; i++) {
    postsTag.innerHTML += createPosts(
      posts[i].year,
      posts[i].city,
      posts[i].title,
      posts[i].author
    );
  }
  for (let i = 0; i < userList.length; i++) {
    userListDOM.innerHTML += createUsers(
      userList[i].userImage,
      userList[i].userName,
      userList[i].userLikes
    );
  }
  for (let i = 0; i < filters.length; i++) {
    filterSection.innerHTML += createDiv("", "filter", filters[i]);
  }
}

function createDiv(id, clasa, content) {
  return `<div class="${clasa}" id="${id}">${content}</div>`;
}

function createWhatsNewPosts(year, city, title, author) {
  return createDiv(
    "",
    "whats-new-post",
    createDiv(
      "",
      "whats-new-city-year",
      createDiv("", "whats-new-year", year) +
        createDiv("", "whats-new-city", ` &times; ` + city)
    ) +
      createDiv("", "whats-new-title", title) +
      createDiv("", "whats-new-author", author)
  );
}

function createPosts(year, city, title, author) {
  return createDiv(
    "",
    "post",
    createDiv(
      "",
      "post-year-city",
      `${year} &times; ${city}`
    )
      +
      createDiv("", "post-title", title) +
      createDiv("", "post-author", author)
  );
}

function createUsers(image, name, likes) {
  return createDiv(
    "",
    "user",
    createDiv(
      "",
      "user-image",
      `<img class="user-image-image" src="${image}" alt="user">` +
        createDiv("", "user-name", name) +
        createDiv(
          "",
          "user-likes",
          `<svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> 
                      ${likes.toString()}`
        )
    )
  );
}

addData();
