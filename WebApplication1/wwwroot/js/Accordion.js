var i = 0;
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
             
                <table class="table table-striped" id="table-`+i+`" >
                  <thead>
                   <tr>
                    <th scope="col" class="text-center">Col1</th>
                    <th scope="col" class="text-center">Col2</th>
                    <th scope="col" class="text-center">Col3</th>
                    <th scope="col" class="text-center">Sum</th>
                   </tr>
                  </thead>
                 <tbody id="+">            
                 </tbody>
               </table>           
       </div>
     </div>
   </div>
   `

}

function addRow(e) {
    var tbody = document.getElementById(e.srcElement.id).nextElementSibling;
    tbody.innerHTML +=
        `
    <tr>
    <td> <input class="form-control" type="text" placeholder=" write number here..."> </td>
    <td> <input class="form-control" type="text" placeholder=" write number here..."> </td>
    <td> <input class="form-control" type="text" placeholder=" write number here..."> </td>
    <td> <input class="form-control" type="text" placeholder=" write number here..."> </td>
    </tr>
    `
    
}