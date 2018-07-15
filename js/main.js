var allButtons = $('.buttons > button')
console.log(allButtons)
for(let i = 0; i < allButtons.length; i++){
  $(allButtons[i]).on('click',function(e){
    var index = $(e.currentTarget).index()
    let n = index * -900
    $('.images').css({
      transform: 'translateX('+ n +'px)'
    })
    num = index
    activeButton(allButtons.eq(num))
      
  })
}

let num = 0
let size = allButtons.length
playSlide(num % size)

function playSlide(index){
  allButtons.eq(index).trigger('click')
}
function activeButton($button){
  $button
    .addClass('active')
    .siblings('.active').removeClass('active')
}

$('.wrap').on('mouseenter',function(){
  clearInterval(timeId)
})
$('.wrap').on('mouseleave',function(){
  timeId = setTimer()
})

