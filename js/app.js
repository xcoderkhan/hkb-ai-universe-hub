const loadAIData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAIData(data.data.tools);
}

const displayAIData = aidatas => {
    const aiContainer = document.getElementById('ai-container');
    
    let limit = 6; // set initial limit to 6
    let showDataButton = document.getElementById('show-data');

    const showAIData = () => {
        aiContainer.innerHTML = "";  // clear previous content
        let end = Math.min(aidatas.length, limit);
        for (let i = 0; i < end; i++) {
            let aidata = aidatas[i];
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
            for (let j = 0; j < aidata.features.length; j++) {
                const li = document.createElement('li');
                li.classList.add('text-secondary', 'custom-padding');
                li.innerText = aidata.features[j];
                ol.appendChild(li);
            }

            const cardBodies = dataDiv.getElementsByClassName('card-body');
            for (let j = 0; j < cardBodies.length; j++) {
                cardBodies[j].appendChild(ol);
            }

            aiContainer.appendChild(dataDiv);
        }

        if (end == aidatas.length) {
            showDataButton.style.display = 'none'; // hide the button if all data has been displayed
        } else {
            showDataButton.style.display = 'block';
        }
    };

    showDataButton.addEventListener('click', function () {
        limit += 6; // increase limit by 6 on each click
        showAIData(); // display data with updated limit
    });

    showAIData(); // display initial data
}

loadAIData();

// code for data sort 

const dateSort = document.getElementById('btn-date-sort');
dateSort.addEventListener("click", function () {
    const aiContainer = document.getElementById('ai-container');
    const dataDivs = aiContainer.getElementsByClassName('col');
    const sortedDivs = [...dataDivs].sort((a, b) => new Date(a.querySelector('.card-text').textContent) - new Date(b.querySelector('.card-text').textContent));
    aiContainer.innerHTML = "";
    for (let i = 0; i < sortedDivs.length; i++) {
        aiContainer.appendChild(sortedDivs[i]); // New child add after sort
    }
});
