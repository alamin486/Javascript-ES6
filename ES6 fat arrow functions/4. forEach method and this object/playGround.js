//The forEach() method calls a function for each element in an array.
var javascript={
    name:"Javascript",
    libraries:["React","Angular","Vue"],
    printLibraries:function(){
        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`));

    }

}
javascript.printLibraries();
//thisObject: This will be called when the callback function is executed.