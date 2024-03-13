import valueToHTML from "./utils/toJson";
import {data} from "./utils/jsonData";

document.getElementById("json").innerHTML = valueToHTML(data);

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

    const $copyPath = document.createElement('div')
    $copyPath.className = 'copy-path'

    const $toolbox = document.createElement('div')
    $toolbox.className = 'toolbox'

    const $expand = document.createElement('button')
    $expand.id = 'expand_all'
    $expand.textContent = '+'

    const $reduce = document.createElement('button')
    $reduce.id = 'reduce_all'
    $reduce.textContent = '-'

    $toolbox.append($expand)
    $toolbox.append($reduce)

    document.body.append($toolbox)
    document.body.onclick = onMouseClick

    $expand.onclick = onExpand
    $reduce.onclick = onReduce
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
