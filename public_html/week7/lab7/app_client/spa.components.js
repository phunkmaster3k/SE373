class Components {
    
   static todoTable(data){
        if ( !Array.isArray(data) ) return Promise.resolve('')
        return Promise.resolve(`${data.map(row=>                                         
                    `<tr>
                        <td>${row.firstname}</td>
                        <td>${row.lastname}</td>
                        <td>${row.department}</td>
                        <td>${row.startDate}</td>
                        <td>${row.jobTitle}</td>
                        <td>${row.salary}</td>
                        <td><button data-id="${row.id}" data-bind-event="click:deleteTodo" class="button is-danger is-outlined">Delete</button></td>
                        <td><button data-id="${row.id}" data-bind-event="click:goToUpdatePage" class="button is-link is-outlined">Update</button></td>
                    </tr>`
                ).join('')}`)
    }
    
}