obj = [
    {
        name :  'Red Velvet Cake',
        img : "./images/cake.jpg" ,
        recipe : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus, saepe neque itaque, similique suscipit quisquam nisi maiores labore fuga culpa possimus alias est explicabo dolorem rem quos vero, praesentium quas aspernatur tempore eos pariatur! At, necessitatibus dolores veritatis ad, amet itaque sapiente eum dicta nihil quisquam ratione exercitationem animi obcaecati accusamus vero cumque, dolorem odit blanditiis nam inventore! Ut culpa ex odio aperiam. Ipsa dignissimos aperiam distinctio debitis, voluptates, doloribus asperiores dolorem quos laudantium officiis id optio. Sit expedita quibusdam, asperiores libero, eos deleniti tenetur fugiat quam dolor voluptate quae sed cumque dolorem doloremque et quis voluptatum quas! Totam, quibusdam sequi. Earum incidunt optio tenetur assumenda sapiente cum harum ducimus! Quo natus quos "
    },
    {
        name :  ' Grilled Cheese Sandwich',
        img : "./images/sandwitch.jpg",
        recipe : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus, saepe neque itaque, similique suscipit quisquam nisi maiores labore fuga culpa possimus alias est explicabo dolorem rem quos vero, praesentium quas aspernatur tempore eos pariatur! At, necessitatibus dolores veritatis ad, amet itaque sapiente eum dicta nihil quisquam ratione exercitationem animi obcaecati accusamus vero cumque, dolorem odit blanditiis nam inventore! Ut culpa ex odio aperiam. Ipsa dignissimos aperiam distinctio debitis, voluptates, doloribus asperiores dolorem quos laudantium officiis id optio. Sit expedita quibusdam, asperiores libero, eos deleniti tenetur fugiat quam dolor voluptate quae sed cumque dolorem doloremque et quis voluptatum quas! Totam, quibusdam sequi. Earum incidunt optio tenetur assumenda sapiente cum harum ducimus! Quo natus quos "
    },
    {
        name :  'Red Velvet Cake',
        img : "./images/coffe.jpg",
        recipe : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus, saepe neque itaque, similique suscipit quisquam nisi maiores labore fuga culpa possimus alias est explicabo dolorem rem quos vero, praesentium quas aspernatur tempore eos pariatur! At, necessitatibus dolores veritatis ad, amet itaque sapiente eum dicta nihil quisquam ratione exercitationem animi obcaecati accusamus vero cumque, dolorem odit blanditiis nam inventore! Ut culpa ex odio aperiam. Ipsa dignissimos aperiam distinctio debitis, voluptates, doloribus asperiores dolorem quos laudantium officiis id optio. Sit expedita quibusdam, asperiores libero, eos deleniti tenetur fugiat quam dolor voluptate quae sed cumque dolorem doloremque et quis voluptatum quas! Totam, quibusdam sequi. Earum incidunt optio tenetur assumenda sapiente cum harum ducimus! Quo natus quo"
    },
]
let totalhtml = '';
obj.forEach((dish) =>{
    let html = `<div class="dish">
    <div class="dish-image">
        <img src="${dish.img}" alt="cake">
    </div>
    <div class="dish-description">
        <h2>${dish.name}</h2>
        <p>${dish.recipe}</p>
        <p class="time">90 min</p>
        <button class="choclate">check now</button>
        <p class="by">by Sarah Palmer</p>
    </div>
</div>`

totalhtml += html;

});

console.log(totalhtml);

const show = document.querySelector(".dish-container");
show.innerHTML = totalhtml;