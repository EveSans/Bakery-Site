/* This is an AJAX (Asynchronous JavaScript and XML)--actually AJAJ (Asynchronous JavaScript and JSON)
   file, but it's still called AJAX--file.  This will allow us to send and receive data on the fly
   without reloading the page. */

/***********************************************************************************/
/**** This must be run from a server (you can use Simple Web Server for Chrome) ****/
/***********************************************************************************/

//Create a variable to reference the empty table body on the HTML document.
var prodRows = document.getElementById("tbodyRows") ;

/* Create a variable to store the XMLHTTPRequest object (tool available through browsers and is
   used to send and receive data via HTTP. */
var prodRequest ;

//Variable to store the data from the JSON file
var prodData ;

// variable to store sort order ("A" or "D")
var sortOrder = "D" ;

// Store the new XMLHTTPRequest object in the variable
prodRequest = new XMLHttpRequest( ) ;

// Open the request to get data from the server
prodRequest.open("GET", "product_data_kem.json") ;
// "Process" the data when the XMLHttpRequest object is loaded.

//send the request
prodRequest.send( ) ;

//create function to read through the data from the JSON file and build the table
prodRequest.onload = function( )

{
	//Assign the data to a variable by parsing it.
	prodData = JSON.parse(prodRequest.responseText) ;

	//Display the first element in the array of data from the JSON file
	renderTable(prodData) ;
}
	

//function to read the data from the JSON file that was stored in the prodData variable
function renderTable(data)
    {
        var prodRowData = "";

        for (i = 0; i<data.length; i++)
            {
                prodRowData += "<tr> <td>" + data[i].prodID + "</td> <td><img src=" +data[i].prodImg+ "></td> <td id='prodName"+i+"'>" + data[i].prodName + "</td>" + "<td>" + data[i].prodDesc + "</td> <td>" + data[i].prodPrice + "</td> <td><input type='number' min ='0' max = '9' id='ProdQty"+i+"' value='0'></td> </tr>";
			}
/* The code above would be building a row dynamically instead of hardcoding it like this:
            <tr>
                <td>101</td>
		<td><img src="Product0.jpg" /></td>
		<td id="prodName0">Dark Roast - Whole Beans (1 1b)"</td>
		<td>This is our boldest blend with a smooth finish and chocolate undertones.  Whole beans.</td>
		<td>9.95</td><td><input type="number" min ="0" max = "9" value = "0" id="ProdQty0"></td>
            </tr>
*/
			
        //insert the data rows into the table body
	    prodRows.innerHTML = prodRowData ;
    }


// confirm Qty
function confirmQty( )
{
	
var q0 = document.getElementById("ProdQty0").value;
    var q1 = document.getElementById("ProdQty1").value;
    var q2 = document.getElementById("ProdQty2").value;
    var q3 = document.getElementById("ProdQty3").value;
    var q4 = document.getElementById("ProdQty4").value;


    var products = [];

    if(q0 > 0)
    {
        products += document.getElementById("prodName0").innerText + ": Qty " + q0 + "\n";
    }

    if(q1 > 0)
    {
      products += document.getElementById("prodName1").innerText + ": Qty " + q1 + "\n";
    }

    if(q2 > 0)
    {
        products += document.getElementById("prodName2").innerText  + ": Qty " + q2 + "\n";
    }

    if(q3 > 0)
    {
        products += document.getElementById("prodName3").innerText + ": Qty " + q3 + "\n";
    }

    if(q4 > 0)
    {
      products += document.getElementById("prodName4").innerText + ": Qty " + q4 + "\n";
    }

    //display qty>0 in alert
    if (products > "" && products != null)
    {
        alert("You have selected the following products: \n" + products) ;
    }
 }   

 /* NOTE: This example doesn't include the Product ID in the confirmation message, and it doesn't write anything 
            to local storage.  Please make sure you do both of those things as specified in the instructions, as they
            are both required. */

function confirmCancel( )
{
    /*Confirm that the user wants to cancel their selections. If true, the default behavior of the Reset button
      will occur to reset the form data. If false, nothing will happen. */
    if (confirm("Are you sure you want to cancel your selections?"))
    {
        document.getElementById("prodForm").reset( );
    }
    else
    {
        return;
    }
}

function sortID()
{
    if (sortOrder == "A")   //sort in ascending order
    {
        prodData.sort(function(a,b)
        {
            return a.prodID - b.prodID ;
        } ) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        prodData.sort(function(a,b)
        {
            return b.prodID - a.prodID ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortName()
{
    if (sortOrder == "A")   //sort in ascending order
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName < b.prodName)
            {
                return -1 ;
            }
        } ) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName > b.prodName) 
            {
                return -1  
            }
        } ) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortPrice()
{
   if (sortOrder == "A")   //sort in ascending order
    {
        prodData.sort(function(a,b)
        {
            return a.prodPrice - b.prodPrice ;
        } ) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        prodData.sort(function(a,b)
        {
            return b.prodPrice - a.prodPrice ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

