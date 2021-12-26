import React from "react";
import { Link } from "react-router-dom";

export default function Product(){
    return(
        <>
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product List</h1>
                <Link to="CreateProduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create New Product</Link>
            </div>

            <div class="card text-center">
  <div class="card-header">
    User Details
  </div>
  <div class="card-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">ProductName</th>
      <th scope="col">ProductPrice</th>
      <th scope="col">Available Stocks</th>
      <th scope="col">Product Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Iphone</td>
      <td>$800</td>
      <td>150</td>
      <td>AAAA</td>
      <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mac-Book</td>
      <td>$1200</td>
      <td>50</td>
      <td>BBBB</td>
      <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ipad</td>
      <td>$500</td>
      <td>100</td>
      <td>CCCC</td>
     <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ipod</td>
      <td>$600</td>
      <td>300</td>
      <td>DDDD</td>
     <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ipen</td>
      <td>$400</td>
      <td>250</td>
      <td>EEEE</td>
     <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
  </div>
  <div class="card-footer text-muted">
    End
  </div>
</div>
        </>
    )
}