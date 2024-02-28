import "../scss/hero.scss";

const bootText = document.getElementById("bootText");

const getBootFormat = (text: string) => `<p><span class="text-green-400">[&nbsp;&nbsp;OK&nbsp;&nbsp;]</span>${text}</p>`

for (let i = 0; i < 100; i++) {
  bootText.innerHTML += getBootFormat("Something cool about WIT Conference, ideally this long.")
}
