var i = 0;
var sumRows = 0;
var sumCols = 0;
var total = 0;

function addAccordion() { 

    console.log("add accordion ....");
    
    var accordionFlush = document.getElementById("accordionFlush");

    //For design
    if (!accordionFlush.classList.contains('border') && !accordionFlush.classList.contains('border')) {
        accordionFlush.classList.add('border');
        accordionFlush.classList.add('rounded');
    }   
    var temp = document.getElementsByTagName("template")[0];
    var newAccordionItem = temp.content.cloneNode(true);
    var accordionNumber = newAccordionItem.querySelector(".accordion-number");  
    accordionNumber.innerHTML += `${++i}`;

    var addBtn = newAccordionItem.querySelector(".add");
    

    var table = newAccordionItem.querySelector(".table");
    table.id += i;

    accordionFlush.appendChild(newAccordionItem); 

}

function addRow(btn) {
    var tbody = btn.parentElement.querySelector("#tbody");
    var temp2 = document.getElementsByTagName("template")[1];
    var newRow = temp2.content.cloneNode(true);
    tbody.appendChild(newRow);
    
}

 

document.getElementsByClassName("accordion-flush")[0].addEventListener("input", function (event) {
    if (event.target && event.target.matches(".integer")) {
        var integerInput = event.target;
        //console.log(integerInput);
        if (integerInput.value %  1) {
           integerInput.value = Math.trunc(integerInput.value);
        }
    }
    if (event.target && event.target.matches(".valnum")) {
        // sum row
        var row = event.target.closest("tr").querySelectorAll(".valnum");
        sumRows = 0;
        sumCols = 0;
   
        row.forEach(sumRow);
        var sumCell = event.target.closest("tr").querySelector(".sum");     
        sumCell.value = sumRows;

        //total
        total = 0;
        var totalCell = event.target.closest(".collapse").querySelector(".total")
        var sumsInputs = event.target.closest(".collapse").querySelectorAll(".sumRow");
        console.log("TotalCell");
        console.log(totalCell);
        sumsInputs.forEach(inp => {
            total += Number(inp.value);
        })
        totalCell.value = total;
        //sum column
        var rowArray = Array.from(row)
        var index = rowArray.indexOf(event.target);
        

        var tbody = event.target.closest(".table").querySelector("tbody");
        var rows = tbody.querySelectorAll("tr");
        
        console.log(rows)
        rows.forEach(row => {
            var tds = row.querySelectorAll("td");
             
            console.log(tds);
           

            tds.forEach(td => {
                console.log(Array.from(tds).indexOf(td))
                if (Array.from(tds).indexOf(td) === index) {
                    sumCol(td.querySelector(".valnum"));

                    var tfooter = event.target.closest("table").querySelector("#footer");
                    console.log("FOOTER");
                    console.log(tfooter);
                    var footerRow = tfooter.querySelector("tr");
                    var footerTds = footerRow.querySelectorAll("td");

                    footerTds.forEach(td => {
                        if (Array.from(footerTds).indexOf(td) === index) {
                            td.querySelector(".sum").value = sumCols;
                        }

                    });


                };
            });

        });
     }

    
});

function sumRow(input) {
    if (!input.classList.contains("sum")) {
        sumRows += Number(input.value);
    }
}

function sumCol(input) { 
    sumCols += Number(input.value);
    console.log("sumcols" + sumCols);
}

 


