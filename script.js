let front = ["html", "reactredux"];
let back = ["js", "node", "sequelize"]
let others = ["git", "mysql"]

document.addEventListener("DOMContentLoaded", () => {
    selection("front")
})

function selection(s) {
    let container = document.getElementById("selection");
    let frontC = document.getElementById("front");
    let backC = document.getElementById("back");
    let othersC = document.getElementById("others");
    container.innerHTML = "";
    switch (s) {
        case "front":
            front.forEach(f => {
                let img = document.createElement("img");
                img.src = `./images/logos/${f}.png`

                container.appendChild(img);
            });

            frontC.className = "selected";
            backC.className = "";
            othersC.className = "";
            break;
        case "back":
            back.forEach(b => {
                let img = document.createElement("img");
                img.width = 256;
                img.height = 256;
                img.src = `./images/logos/${b}.png`

                container.appendChild(img);
            });
            backC.className = "selected";
            frontC.className = "";
            othersC.className = "";
            break;
        case "others":
            others.forEach(o => {
                let img = document.createElement("img");
                img.width = 256;
                img.height = 256;
                img.src = `./images/logos/${o}.png`

                container.appendChild(img);
            });
            othersC.className = "selected";
            frontC.className = "";
            backC.className = "";
            break;

        default:
            break;
    }

}