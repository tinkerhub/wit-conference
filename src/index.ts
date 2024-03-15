import "./scss/index.scss";

import valueToHTML from "./utils/toJson";
import {data} from "./utils/jsonData";

document.getElementById("json").innerHTML = valueToHTML(data);

const toggle = document.getElementById('toggle')

function init() {
    const collapsers = document.querySelectorAll('#json .collapsible .collapsible')

    collapsers.forEach($collapser => {
        const $parent = $collapser.parentElement
        const id = Math.random().toString(36);
        $parent.id = id
        $parent.dataset.status = 'expanded'
        $parent.onclick = e => {
            onToggle(e, id, $collapser)
        }
    });

    toggle.addEventListener('change', (e) =>
        collapsers.forEach(e.target["checked"] ? reduce : expand));

    toggle.dispatchEvent(new Event('change'));

    document.querySelectorAll("a").forEach((a) =>
        a.onclick = (e) => e.stopPropagation());
}

function onToggle(e, id, $collapser) {
    e.stopPropagation()
    const $parent = $collapser.parentElement
    if ($parent.id === id) {
        switch ($parent.dataset.status) {
            case 'expanded':
                reduce($collapser)
                break
            case 'reduced':
                expand($collapser)
                break
            default:
                $parent.dataset.status = 'expanded'
                reduce($collapser)
        }
    }
}

function expand($collapsed: Element) {
    const $parent = $collapsed.parentElement
    if ($parent.dataset.status !== 'reduced') return

    $parent.classList.remove('collapsed')
    $parent.dataset.status = 'expanded'
}

function reduce($collapsed: Element) {
    const $parent = $collapsed.parentElement
    if ($parent.dataset.status !== 'expanded') return

    const $ellipsis = $parent.querySelector('.ellipsis')
    if ($ellipsis) $ellipsis["dataset"].value = `${$collapsed.childElementCount}`
    $parent.classList.add('collapsed')
    $parent.dataset.status = 'reduced'
}

init();
