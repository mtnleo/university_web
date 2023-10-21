// 1.

function cargarListaFrase(id_lista, id_item, title, body) {
    const elemento = document.getElementById(id_lista);

    let newItemList = document.createElement("li");
    let newHeaderFour = document.createElement("h4");
    newHeaderFour.innerHTML = title;
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = body;

    newItemList.appendChild(newHeaderFour);
    newItemList.appendChild(newParagraph);

    elemento.append(newItemList);
}

function generateList(response) {
    for (i = 25; i < 28; i++) {
        cargarListaFrase("lista", i, response[i].title, response[i].body); // carga 3 elementos a la lista
    }
}

async function getPhrases() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        if (response.ok) {
            generateList(await response.json());
        }
        else {
            throw new Error(response.status);
        }
        
    }
    catch (error) {
        console.error("Error: ", error);
    }
}

//2.

function generateRandomGenerateButton(id) {
    let div_container = document.getElementById(id);

    let newButton = document.createElement("button");
    newButton.onclick = getRandomImage;
    newButton.setAttribute("id", "generate");
    let nodeButton = document.createTextNode("Generate");
    newButton.appendChild(nodeButton);

    div_container.appendChild(newButton);
}


getPhrases();
generateRandomGenerateButton("generate_button");


function getRandomImage() {
    try {
        console.log("Runs");
        let width = Math.floor(Math.random() * 300);
        let height = Math.floor(Math.random() * 300);
        let img_url = "https://picsum.photos/" + width + "/" + height;
        console.log(img_url);
        document.getElementById("random_image").src = img_url;
    } catch (error) {
        console.error("Error: ", error);
    }
}