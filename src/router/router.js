
const mySelf = require( "../components/mySelf.vue")
const myEd = require("../components/myEducation.vue")
const myJobs = require( "../components/myJobs.vue")
const other = require( "../components/otherThings.vue")




export default{


    routes:[{
        path:"/",
        name:"home",
        components:mySelf
    },{
        path:"/home",
        name:"mySelf",
        components:mySelf
    },{
        path:"/edu",
        name:"myeducation",
        components:myEd
    },{
        path:"/jobs",
        name:"jobs",
        components:myJobs
    },{
        path:"/other",
        name:"other",
        components:other
    }]
}