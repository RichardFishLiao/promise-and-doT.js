function taskA(){
    console.log("A")
}
function taskB(){
    console.log("B")
}
function onRejected(error){
    console.log(error)
}
function finalTask(){
    console.log("finished")
}

var promise=Promise.resolve()

promise.then(taskA).then(taskB).catch(onRejected).then(finalTask).then(function(){
    console.log(Promise)
})
