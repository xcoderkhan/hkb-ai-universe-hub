const loadAIData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAIData(data.data.tools);
}

const displayAIData = aidatas => {
    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerHTML = ""; // clear previous content
    aidatas = aidatas.slice(0, 6);
    aidatas.forEach(aidata => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card rounded-3 h-100">
                <img src="${aidata.image}" class="card-img-top p-3 rounded-5" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                </div>
                <div class="custom-padding">
                    <p class="line"></p>
                        <div class="d-flex justify-content-between">
                            <div>
                                <h5 class="card-title">${aidata.name}</h5>
                                <p class="card-text">${aidata.published_in}</p>
                            </div>
                            <div>
                                <button class="btn btn-icon"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                </div>
        </div>`;

        // create ol array in the inner HTML

        const ol = document.createElement('ol');
        ol.classList.add('list-group', 'list-group-flush');
        for (let i = 0; i < aidata.features.length; i++) {
            const li = document.createElement('li');
            li.classList.add('text-secondary', 'custom-padding');
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

const dateSort = document.getElementById('btn-date-sort');
dateSort.addEventListener("click", function () {
    const aiContainer = document.getElementById('ai-container');
    const dataDivs = aiContainer.getElementsByClassName('col');
    const sortedDivs = [...dataDivs].sort((a, b) => new Date(a.querySelector('.card-text').textContent) - new Date(b.querySelector('.card-text').textContent));
    for (let i = 0; i < sortedDivs.length; i++) {
        aiContainer.appendChild(sortedDivs[i]);
    }
});
