var i = 0;
var sumRows = 0;
var sumCols = 0;
var total = 0;

function addAccordion() {
    
    //For design
    if (!$(".accordion-flush").hasClass("border")) {
        $(".accordion-flush").addClass("border rounded");
    } 

    var newAccordionItem = $("template").first()[0].content.cloneNode(true);
    console.log(newAccordionItem);

    var $accordionNumber =$(newAccordionItem).find(".accordion-number")
    console.log($accordionNumber);
    
    $accordionNumber.html( `${++i}`);
    var $addBtn = $(newAccordionItem).find(".add");
    var $table = $(newAccordionItem).find(".table");
    $table.attr("id", `table-${i}`)

    $(".accordion-flush").append(newAccordionItem);

}

function addRow(btn) {
    var $tbody = $(btn).parent().find("#tbody");
    var $temp2 = $("template").first().next();
    var newRow = $temp2[0].content.cloneNode(true);
    $tbody.append(newRow);

}

$(".accordion-flush").on("input", function (event) {
    if (event.target && event.target.matches(".integer")) {
        var $integerInput = $(event.target);
        console.log($integerInput);
        if ($integerInput.val() % 1) {
            $integerInput.val(Math.trunc($integerInput.val()));
        }
    }

    if (event.target && $(event.target).hasClass("valnum")) {
        // sum row
        var $row = $(event.target).closest("tr").find(".valnum");
        console.log($row);
        sumRows = 0;
        sumCols = 0;

        $row.each(function () {
            sumRows += Number($(this).val());
        });

        var $sumCell = $(event.target).closest("tr").find(".sum");
        console.log(sumRows);
        $sumCell.val(sumRows);


        //total
        total = 0;
        var $totalCell = $(event.target).closest(".collapse").find(".total")
        var $sumsInputs = $(event.target).closest(".collapse").find(".sumRow");

        console.log($totalCell);
        $sumsInputs.each(function () {
            total += Number($(this).val());
        });

        $totalCell.val(total);

        //sum column
        var rowArray = Array.from($row)
        var index = rowArray.indexOf(event.target);
        console.log("the index" + index);

        var $tbody = $(event.target).closest(".table").find("tbody");
        var $rows = $tbody.find("tr");

        console.log($rows)


        $rows.each(function () { 
            var $tds = $(this).find("td");

            $tds.each(function (tdindex) { 
               // console.log(Array.from($tds).indexOf(td))
                if (tdindex === index) {
                    sumCols +=Number($(this).find(".valnum").val());
                    var $tfooter = $(event.target).closest("table").find("#footer");
                    
                    var $footerRow = $tfooter.find("tr");
                    var $footerTds = $footerRow.find("td");

                    $footerTds.each(function (footerIndex) { 
                        if (footerIndex === index) {
                            $(this).find(".sum").val(sumCols)  
                        }

                    });


                };
            });
        });

    }
});

function sumCol(input) {
    sumCols += Number(input.value);
   
}


 