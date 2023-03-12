const loadAIData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAIData(data.data.tools);
}

const displayAIData = aidatas => {
    const aiContainer = document.getElementById('ai-container');
    aidatas.forEach(aidata => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional
                        content. This content is a little bit longer.</p>
                </div>
        </div>`;
        aiContainer.appendChild(dataDiv);

    });
}

loadAIData();