const app = document.querySelector("#app");
// Forma de usar React de forma muy cruda, se peudehacer mejor
const h = React.createElement

const Avatar = params => {
    const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
    return h('img', {src});
};

ReactDOM.render(
    // h('div', null, [h(Avatar, {id:1}), h(Avatar, {id: 2})]), app);
    h(Avatar, {id: 1 }), app);
    

// const Avatar = (params) => {
//   const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
//   return `
//             <picture>
//                 <img src="${src}">
//                 <strong>${params.name}</strong>
//             </picture>
//         `;
// };

// app.innerHTML += Avatar({ id: 83, name: "Andrea" });
// app.innerHTML += Avatar({ id: 83, name: "Daniela" });

// //Cogemos todos las imagenes y por cada una de ella quiero que cada imagen escuche un evento y al hacer click me cambies la clase por disabled.
// app.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("click", () => {
//     img.classList.toggle("disabled");
//   });
// });
