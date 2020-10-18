import './app1.css'
import $ from 'jquery'

const $addButton = $('#add')
const $minusButton = $('#minus')
const $mulButton = $('#mul')
const $divideButton = $('#divide')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)

$addButton.on('click', () => {
    let n = parseFloat($number.text())
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$minusButton.on('click', () => {
    let n = parseFloat($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$mulButton.on('click', () => {
    let n = parseFloat($number.text())
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})
$divideButton.on('click', () => {
    let n = parseFloat($number.text())
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})