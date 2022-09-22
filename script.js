

function edit_row(no) {
    var new_name = prompt("Change name of fruit")
    if(new_name != null){
        var name = document.getElementById("name_row" + no);

        name.innerHTML = new_name        
    }
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_name = document.getElementById("new_name").value;
    console.log(new_name)
    var table = document.getElementById("data_table");
    var table_len = table.rows.length;
    console.log(table_len)

    table.insertRow(table_len).outerHTML = `
        <tr id="row${table_len}">
            <th scope="row">${table_len}</th>
            <td id="name_row${table_len}">${new_name}</td>
            <td><button type="button" class="btn btn-light" id="edit_button${table_len}" onclick="edit_row('${table_len}')" value="Edit Row">Edit</button></td>
            <td><button type="button" class="btn btn-danger" id="delete_button${table_len}" onclick="delete_row('${table_len}')" value="Delete Row">Delete</button></td>
        </tr>
    `
    document.getElementById("new_name").value = "";
}
