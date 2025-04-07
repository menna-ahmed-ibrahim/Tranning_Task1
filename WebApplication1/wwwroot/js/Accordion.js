var i = 0;
var decimalRegax = /^-?\d*\.\d+$/;
var integerRegax = /^-?\d+$/;
var sum = 0;
var sum2 = 0;

function addAccordion() { 

    console.log("add accordion ....");
    
    var accordionFlush = document.getElementById("accordionFlush");

    if (!accordionFlush.classList.contains('border') && !accordionFlush.classList.contains('border')) {
        accordionFlush.classList.add('border');
        accordionFlush.classList.add('rounded');
    }

    accordionFlush.innerHTML += `
  <div class="accordion-item">
    <h2 class="accordion-header" id="faqHeading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
        <span class="me-2 text-primary">
          <i class="bi bi-question-circle-fill"></i>
        </span>
         Accordion Item #` + ++i +
     ` 
      </button>
    </h2>
    <div id="faqCollapse1" class="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
              <button type="button" class="btn btn-danger" onclick="addRow(event)" id="btn-`+ i +`">Add Row</button>
             
                <table class="table" id="table-`+i+`" >
                  <thead class="thead-dark">
                   <tr>
                    <th scope="col" class="text-center">Col1</th>
                    <th scope="col" class="text-center">Col2</th>
                    <th scope="col" class="text-center">Col3</th>
                    <th scope="col" class="text-center">Sum</th>
                   </tr>
                  </thead>
                 <tbody id = "tbody">            
                 </tbody>
                 <tfoot id="footer">
                   <tr>
                    <td><input class="form-control sum col-1" type="number" value="0" readonly></td>
                    <td><input class="form-control sum col-2" type="number" value="0" readonly></td>
                    <td><input class="form-control sum col-3" type="number" value="0" readonly></td>
                    <td><input class="form-control sum col-4" type="number" value="0" readonly></td>
                   </tr>
                 </tfoot>
               </table>           
       </div>
     </div>
   </div>
   `

}

function addRow(e) {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML +=
    `
    <tr>
    <td> <input class="form-control col-1" type="number" value="0" onchange="decimalInputValidate1(this)"><span class="Error input-Error d-none text-danger" style="font-size: 14px;"></span></td>
    <td> <input class="form-control col-2" type="number" value="0" onchange="integerInputValidate(this)"> <span class="Error input-Error d-none text-danger" style="font-size: 14px;"></span> </td>
    <td> <input class="form-control col-3" type="number" value="0" onchange="decimalInputValidate2(this)"> <span class="Error input-Error d-none text-danger" style="font-size: 14px;"></span> </td>
    <td> <input class="form-control sum col-4" type="number" value="0" readonly></td>
    </tr>
    `
    
}


function decimalValidation(inputEle) {
    var td = inputEle.closest("td");
    var spanElement = td.querySelector(".input-Error");

    if (!decimalRegax.test(Number(inputEle.value))) {
        inputEle.classList.add("border-danger")

        var spanElement = td.querySelector(".input-Error");
        spanElement.classList.remove("d-none");
        spanElement.classList.add("d-block");
        spanElement.innerHTML = "Please enter a decimal number";
        return false;
    }
    else {
        inputEle.classList.remove("border-danger");
        spanElement.classList.remove("d-block");
        spanElement.classList.add("d-none");
        return true;
    }
}

function decimalInputValidate1(inputElement) {
    if (decimalValidation(inputElement)) {
        var tr = inputElement.parentElement.parentElement;
        console.log(tr);
        var Rowinputs = tr.querySelectorAll("input");
        var sumInp = tr.querySelector(".sum");
        sum = 0;
        Rowinputs.forEach(sumRow);
        sumInp.value = sum;


        var tbody = tr.parentElement;
        console.log(tbody);
        var colInputs = tbody.querySelectorAll(".col-1");
        console.log(colInputs);
        var tfoot = document.getElementById("footer");
        var colSumInput = tfoot.querySelector(".col-1");
        sum2=0
        colInputs.forEach(sumCol);
        colSumInput.value = sum2
        
    };
}


function decimalInputValidate2(inputElement) {
    if (decimalValidation(inputElement)) {
        var tr = inputElement.parentElement.parentElement;
        console.log(tr);
        var Rowinputs = tr.querySelectorAll("input");
        var sumInp = tr.querySelector(".sum");
        sum = 0;
        Rowinputs.forEach(sumRow);
        sumInp.value = sum;


        var tbody = tr.parentElement;
        console.log(tbody);
        var colInputs = tbody.querySelectorAll(".col-3");
        console.log(colInputs);
        var tfoot = document.getElementById("footer");
        var colSumInput = tfoot.querySelector(".col-3");
        sum2 = 0
        colInputs.forEach(sumCol);
        colSumInput.value = sum2
    }
}


function integerInputValidate(inputElement) {
    var td = inputElement.closest("td");
    var spanElement = td.querySelector(".input-Error");

    if (!integerRegax.test(Number(inputElement.value))) {
        inputElement.classList.add("border-danger")

        var spanElement = td.querySelector(".input-Error");
        spanElement.classList.remove("d-none");
        spanElement.classList.add("d-block");
        spanElement.innerHTML = "Please enter an integer number";

    }
    else {
        inputElement.classList.remove("border-danger");
        spanElement.classList.remove("d-block");
        spanElement.classList.add("d-none");
           var tr = inputElement.parentElement.parentElement;
        console.log(tr);
        var inputs = tr.querySelectorAll("input");
        var sumInp = tr.querySelector(".sum");
        sum = 0;
        inputs.forEach(sumRow);
        sumInp.value = sum;


        var tbody = tr.parentElement;
        console.log(tbody);
        var colInputs = tbody.querySelectorAll(".col-2");
        console.log(colInputs);
        var tfoot = document.getElementById("footer");
        var colSumInput = tfoot.querySelector(".col-2");
        sum2 = 0
        colInputs.forEach(sumCol);
        colSumInput.value = sum2
    }
}


function sumRow(input) {
    //console.log(input);
    if (!input.classList.contains("sum")) {
       sum += Number(input.value);
    }
}


function sumCol(input) {
    //console.log(input);
    if (!input.classList.contains("sum")) {
        sum2 += Number(input.value);
    }
}

 