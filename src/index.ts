import "./scss/index.scss";

import valueToHTML from "./utils/toJson";
import {data} from "./utils/jsonData";

document.getElementById("json").innerHTML = valueToHTML(data);

const toggle = document.getElementById('toggle')

let collapsers, $selectedLI;

function init() {
    collapsers = document.querySelectorAll('#json .collapsible .collapsible')

    for (const $collapser of collapsers) {
        const $parent = $collapser.parentElement
        const id = Math.random().toString(36);
        $parent.id = id
        $parent.dataset.status = 'expanded'
        $parent.onclick = e => {
            onToggle(e, id, $collapser)
        }
    }

    document.body.onclick = onMouseClick

    toggle.addEventListener('change', e => {
        if (!e.target["checked"]) {
            onExpand()
        } else {
            onReduce()
        }
    });

    toggle.dispatchEvent(new Event('change'));
}

function onToggle(e, id, $collapser) {
    e.preventDefault()
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

function onExpand() {
    for (const $collapsed of collapsers) {
        expand($collapsed)
    }
}

function expand($collapsed) {
    const $parent = $collapsed.parentElement
    if ($parent.dataset.status !== 'reduced') return

    $parent.classList.remove('collapsed')
    $parent.dataset.status = 'expanded'
}

function onReduce() {
    for (const $collapsed of collapsers) {
        reduce($collapsed)
    }
}

function reduce($collapsed) {
    const $parent = $collapsed.parentElement
    if ($parent.dataset.status !== 'expanded') return

    const $ellipsis = $parent.querySelector('.ellipsis')
    if ($ellipsis) $ellipsis.dataset.value = `${$collapsed.childElementCount}`
    $parent.classList.add('collapsed')
    $parent.dataset.status = 'reduced'
}

function getParentLI($element) {
    if ($element && $element.tagName === 'LI') return $element

    while ($element && $element.tagName !== 'LI') {
        $element = $element.parentElement
    }

    return $element
}

function onMouseClick(e) {
    if ($selectedLI) $selectedLI.firstElementChild.classList.remove('selected')

    $selectedLI = getParentLI(e.target)
    if ($selectedLI) $selectedLI.firstElementChild.classList.add('selected')
}

init();
