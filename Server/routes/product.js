const router = require("express").Router();
let Product = require("../models/add.model");
import path from "path";

//http://localhost:8070/product/addp
router.route("/addp").post((req, res) => {

    

    //console.log("req "+JSON.stringify(req.file.filename)); //middel ware eken return wena file name eka api araganna eka
    //const imageurl = "/assert/"+req.file.filename;
        const userId= req.body.userId;
        const title= req.body.title;
        const cat= req.body.cat;
        const cover= req.body.cover;
        const desc= req.body.desc;
        const shortDesc = req.body.shortDesc;
        const price = Number(req.body.price);
        const availableQuntity = Number(req.body.availableQuntity);
        

        const newProduct = new Product({
            userId,
            title,
            cat,
            cover,
            desc,
            shortDesc,
            price,
            availableQuntity

        })
        newProduct.save().then(() => {
            res.json("Product Added")
        }).catch((err) => {
            console.log(err);
        })  
})


//view all
//http:localhost:8070/ wage data display krnna  //get methode eka use kle
router.route("/").get((req, res) => {

    //uda hdpu const variable eka //me arrow function name eka api kmthi nmk
    Showroomitem.find().then((Showroomitems) => {

        res.json(Showroomitems)

    }).catch((err) => {
        console.log(err)
    })

})



//update                                  //passwena id eka
//http://localhost:8070/contactus/update/fdgtrtytrdfg wage  ena tika id eka widihta gnna : oni hode eka gnna //put ma oni na post ekenuth puluwn

router.route("/update/:cid").put(async (req, res) => {


    let showroomitemID = req.params.cid;  //backend eke indn ena kenage userid eka fetch krl gththa
    //console.log("req "+JSON.stringify(req.file.filename)); //middel ware eken return wena file name eka api araganna eka
  
    let  imageurl = null;
    if(req.file !== undefined){
          imageurl = "/assert/"+req.file.filename;
    }else{
         imageurl = req.body.itemurl;
    }
    
    const {itemname, quntity, price, category } = req.body; //front end eke indala updat krnna oni data tika enwa object ekk widiht
    //eka enne req.body eke.e tika wen krl api aluthin hdna variable wlt dgnnwa .me widiht kynwa destructure kyl.meka nthuwa add eke athule widihtath data tyagnna puluwn

    const updateShowroomitem = {
        imageurl,
        itemname,
        quntity,
        price,
        category
    }
    //model name             //id eka save krpu eka//update krnna hdpu object eka 54 di
    const update = await Showroomitem.findByIdAndUpdate(showroomitemID, updateShowroomitem).then(() => {

        res.status(200).send({ status: "item updated" })
        //*********front end ekt update krpu userwa ywnnna user dmme 
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})


router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    //model name
    await Showroomitem.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })
})


//get only one contactus details
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Showroomitem.findById(userId).then((showroomitem) => {
        res.status(200).send({ status: "item fetched", showroomitem })//uda peliye contactus eka
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message });
    })
})


module.exports = router;