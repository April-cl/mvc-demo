import './app2.css'
import $ from 'jquery'

const $tabBar = $('#tab-bar')
const $tabContent = $('#tab-content')

let index = parseInt(localStorage.getItem('index')) || 1

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    index = $li.index()
    localStorage.setItem('index', index)
    $li.addClass('selected').siblings().removeClass('selected')
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

console.log(index)
$tabBar.children().eq(index).trigger('click')

