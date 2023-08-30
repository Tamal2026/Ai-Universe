const universe = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await res.json();


    const universeContainer = document.getElementById('universe-container');
    data.data.tools.forEach((universeMain)=>{
    const div = document.createElement('div');
    div.classList = `  "card w-96 bg-base-100 shadow-2xl"`;

    const imageUrl = universeMain.image || 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f8f324101efad07fbbf0f0272bfe0cb9/jasper-ai.jpg';

    div.innerHTML = ` <div class="card w-96 bg-base-100 shadow-2xl">
    
    
    <div class="card-body">
    <figure><img src="${imageUrl}" alt="Shoes" /></figure>
    
    <h3 class="text-lg font-semibold">Features</h3>
    <div class="list-none">
        <li>1.Natural Language Processing</li>
        <li>2.Contextual Understanding</li>
        <li>Text Generation</li>
    </div>
    <hr>

      <h2 class="card-title">${universeMain.name}</h2>
      <div class="card-actions justify-end">
    <button onclick="showdetails('${universeMain.id}')" class="btn btn-xs"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div> `;
  universeContainer.appendChild(div);

    })


};


const showdetails = async (id) =>{

 const res = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${id} `);
 const data = await res.json();
 const universeMain = data.data;
 showUniverse(universeMain);


}

const showUniverse = (universeMain) =>{
console.log(universeMain);
const aiName = document.getElementById('ai-name');
aiName.innerText = universeMain.tool_name;

showUniverseContainer = document.getElementById('show-universe-container')

aiName.innerHTML = `



`

  my_modal_3.showModal();

}


universe();