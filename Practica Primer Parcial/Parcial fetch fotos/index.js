/*document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate_button").addEventListener("click", changeColor(this))


});

function changeColor(element) {
    element.style.color = "blue";
}*/
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


getPhrases();



/*
document.getElementById("generate_button").onclick = getRandomImage();

//const img_url = "https://picsum.photos";


async function getRandomImage() {
    try {
        const width = Math.floor(Math.random() * 300);
        const height = Math.floor(Math.random() * 300);
        const img_url = "https://picsum.photos/${width}/${height}";
        console.log(img_url);
        const response = await fetch(img_url);
        document.getElementById("random_image").src = JSON.stringify(response);
    } catch (error) {
        console.error("Error: ", error);
    }
}*/