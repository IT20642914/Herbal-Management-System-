import "./UpdateMyProducts.css";

export default function UpdateMyProducts() {
  return (
    <div className="sellProductCont container">
    <div className="card shadow mb-1">


        <div className="sellProductHeader card-header py-3">
            <h4 className="sellProductTitle " ><b>Update Product</b></h4>
        </div>
        <form  >

            <div className="card-body">
                <div className="mb-3">

                    <div >

                        <div className="form-group">


                            <label for="title" className="sellProductLable">Title:</label>
                            <input type="text" className="form-control" name="title" aria-describedby="emailHelp" placeholder="Enter Title"></input>

                            <label for="exampleInputEmail1" className="sellProductLable">Choose Category :</label>
                            <select name="cat" id="cat" className="sellProductOptions" placeholder="select category" >

                                <option value="Bath&Shower">Bath  and Shower</option>
                                <option value="Body&MassageOils">Body & Massage Oils</option>
                                <option value="FaceMasks&HandSanitizers">Face Masks & Hand Sanitizers</option>
                                <option value="Facewash">Facewash</option>
                                <option value="DayCream">Day Creams</option>
                                <option value="Sope">Sope</option>
                                <option value="HairCare">HairCare</option>
                                <option value="Lotion">Lotion</option>

                            </select>


                            <label for="images" className="sellProductLable">Select Cover Image</label>
                            <input type="file" className="form-control" name="file" aria-describedby="emailHelp" required  ></input>


                            <label for="desc" className="sellProductLable">Description :</label>
                            <textarea cols='0' rows='4' className="form-control" name='desc' aria-describedby="emailHelp" id='' placeholder="Enter Description"></textarea>


                            <label for="shortDesc" className="sellProductLable">Short Description:</label>
                            <input type="text" className="form-control" name="shortDesc" aria-describedby="emailHelp" placeholder="Enter Short Description"></input>

                            <label for="deliveryTime" className="sellProductLable">Delivery Time (e.g. 4 days)</label>
                            <input type="number" className="form-control" name="deliveryTime" aria-describedby="emailHelp" placeholder="Enter Delivery Dates" ></input>


                            <label for="availableQuntity" className="sellProductLable">Available Quntity</label>
                            <input type="number" className="form-control" name="pravailableQuntityce" aria-describedby="emailHelp" placeholder="Enter Available Quntity" ></input>

                            <label for="price" className="sellProductLable">Price :</label>
                            <input type="number" className="form-control" name="price" aria-describedby="emailHelp" placeholder="Enter price 000.00" ></input>







                        </div>

                        <button type="submit" className="sellProductButton">Add product</button>

                    </div></div></div>
        </form>

    </div></div>
  )
}
