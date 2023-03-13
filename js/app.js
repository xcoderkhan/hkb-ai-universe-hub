const loadAIData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAIData(data.data.tools);
}

const displayAIData = aidatas => {
    console.log(aidatas);
    const aiContainer = document.getElementById('ai-container');
    aidatas.forEach(aidata => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card">
            <img src="${aidata.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                </div>
                <div class=>
                <p class="line"></p>
                <h5 class="card-title">${aidata.name}</h5>
                </div>
        </div>`;

        // create ol array in the inner HTML

        const ol = document.createElement('ol');
        ol.classList.add('list-group', 'list-group-flush');
        for (let i = 0; i < aidata.features.length; i++) {
            const li = document.createElement('li');
            li.classList.add('custom-padding');
            li.innerText = aidata.features[i];
            ol.appendChild(li);
        }

        const cardBodies = dataDiv.getElementsByClassName('card-body');
        for (let i = 0; i < cardBodies.length; i++) {
            cardBodies[i].appendChild(ol);
        }

        aiContainer.appendChild(dataDiv);

    });
}

loadAIData();
