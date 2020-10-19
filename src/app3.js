import './app3.css'
import $ from 'jquery'

const $box = $('.box')
$box.on('click', () => {
    $box.toggleClass('move')
})