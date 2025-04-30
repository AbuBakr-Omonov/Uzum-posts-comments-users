const API_URL = "https://jsonplaceholder.typicode.com/posts"
const WrapperEl = document.querySelector(".wrapper")

async function fetchData() {
    try {
        let response = await fetch(API_URL)
        let proms = response.json()
        proms
            .then(res => {
                renderCard(res)
                 console.log(res);

            })
            .catch(err => {
                console.log(err);
            })
    } catch (err) {
        console.error(err);
    }
    
}



function renderCard(data) {
    const fragment = document.createDocumentFragment()
    data.forEach(post => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML =`
        <div class="title" >${post.title}</div>
        <div class="content">
         ${post.body}
         </div>
        `
        fragment.appendChild(card)
        console.log(card);
        
    });
    WrapperEl.appendChild(fragment)
}
window.onload = () => {
    fetchData()
}