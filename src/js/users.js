const API_URL = "https://jsonplaceholder.typicode.com/users"
const WrapperEl = document.querySelector(".wrapper")

async function fetchData() {
    try {
        const reponse = await fetch(API_URL)
        const user = reponse.json()
        user.then(res => {
            rendCard(res)
        })
            .catch(err => {
                console.log(err);

            })
    }catch(err){
        console.error(err);
        
    }

}

function rendCard(data){
  const fragment = document.createDocumentFragment()
    data.forEach(el => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML =`
        <img src="https://assets.website-files.com/5e8e816d43060db856099187/627176a2c66f18a69889305b_1-developer-portfolio-webflow-template.jpeg"
                alt="" />
            <h2>${el.name}</h2>
            <p class="username">${el.username}</p>
            <div class="info">
                <p><strong>Company:</strong>${el.name}</p>
                <p><strong>Website:</strong> ${el.website}</p>
                <p><strong>Address:</strong>${el.street} 556</p>
            </div>
            <div class="contact">${el.email}</div>
        `
        fragment.appendChild(card)

    });

    WrapperEl.appendChild(fragment)
}

window.onload = () => {
    fetchData()
}