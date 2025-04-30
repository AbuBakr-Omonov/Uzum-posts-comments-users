const API_Url = "https://jsonplaceholder.typicode.com/comments"
const WrapperEl = document.querySelector(".wrapper")

async function fetchData() {
    try {
        let response = await fetch(API_Url)
        let commet = response.json()
        commet
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
    data.forEach(com => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
         <div class="row">
         <img src="https://assets.website-files.com/5e8e816d43060db856099187/627176a2c66f18a69889305b_1-developer-portfolio-webflow-template.jpeg" alt="User Image" class="img" />
         <div class="info">
         <h3>${com.name}</h3>
         <p>Web Developer</p>
          </div>
          </div>
          <div class="text">${com.body}</div>
           <div class="email">${com.email}</div>
        `
        fragment.appendChild(card)
    });
    WrapperEl.appendChild(fragment) 

}

window.onload = () => {
    fetchData()
}

