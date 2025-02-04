const root= document.body
const info=[{id:1,quantity:1},{id:2,quantity:1},{id:3,quantity:1},{id:4,quantity:1},{id:5,quantity:1}]
function renderTotal(id){
    root.innerHTML=`
    <div class="countainer flex gap-6 justify-center">
        <div class="flex flex-col gap-8">
            <div class="cursor-pointer rounded-full bg-blue-300 w-20 h-20 inline-block" onclick="renderUp(${id})"><img src="./public/icon/icons8-up-50.png" width="60px" class="translate-x-2.5 translate-y-2"></div>
            <div class="cursor-pointer rounded-full bg-blue-300 w-20 h-20 inline-block" onclick="renderDown(${id})"><img src="./public/icon/icons8-up-50.png" width="60px" class="translate-x-2.5 translate-y-2 rotate-180"></div>
        </div>
        <div class="number text-5xl text-blue-950 self-center py-2 px-2 border-2 border-b-blue-700">1</div>
    </div>
    <div onclick="renderInput()" class="btn border-2 border-b-blue-700 inline-block p-2 bg-amber-200 shadow-black drop-shadow-2xl cursor-pointer">big number</div>
    <input onclick="palceHolder()" onchange="change(${id})" type="number" class="bg-amber-300 hid duration-1000 " placeholder="10">
    `
}
renderTotal(3)
const countainer=document.body.querySelector(".countainer")
const btn=document.body.querySelector('.btn')
const input=document.body.querySelector('input')
console.log(input.value)
function renderUp(id){
    const change=info.filter((value)=>value.id==id)
    index=info.indexOf(change[0])
    change[0].quantity+=1
    info[index].quantity=change[0].quantity
    countainer.lastElementChild.textContent=change[0].quantity
}
function renderDown(id){
    const change=info.filter((value)=>value.id==id)
    index=info.indexOf(change[0])
    if(change[0].quantity>1){
        change[0].quantity-=1
        info[index].quantity=change[0].quantity
        countainer.lastElementChild.textContent=change[0].quantity
    }
}

function renderInput(){
    btn.classList.add('hid')
    input.classList.remove('hid')
}
function change(id){
    const change=info.filter((val)=>val.id==id)
    index=info.indexOf(change[0])
    change[0].quantity=input.value
    info[index].quantity=change[0].quantity
    countainer.lastElementChild.textContent=change[0].quantity
}
function palceHolder(){
    input.removeAttribute('placeholder')
}