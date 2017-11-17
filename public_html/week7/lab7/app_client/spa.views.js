class View {

    get home() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Todo Crud Sample</h1>
                    </div>
                </section>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>              
                <table class="table is-spaced is-bordered is-hoverable is-fullwidth is-small">
                  <thead>
                    <tr class="is-selected">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th></th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="todoTable"></tbody>
              </table>`)
    }
    
     get add() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Add New Todo</h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">First Name</label>
                        <input type="text" name="firstname" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Last Name</label>
                        <input type="text" name="lastname" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="department" class="select" required>
                             <option value="">Choose One</option>
                             <option value="Office">Office</option>
                             <option value="Dock">Dock</option>
                             <option value="Warehouse">Warehouse</option>
                        </select>
                    </div>
                    <div class="field">
                        <label class="label">Start Date</label>
                        <input type="text" name="startDate" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Job Tilte</label>
                        <input type="text" name="jobTitle" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Salary</label>
                        <input type="text" name="salary" class="input" required />
                    </div>
                    <div class="field"> 
                        <input type="reset" value="reset" />
                        <input type="button" value="submit" class="button is-link" data-bind-event="click:saveTodo" /> 
                    </div>
                    <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
                </form>`)
    }

    get update() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Update Todo ID <span data-bind-model="id" class="has-text-warning"></span></h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">Title</label>
                        <input type="text" name="title" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="completed" class="select" required>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>
                    <div class="field">
                        <input type="button" value="submit" data-bind-event="click:updateTodo" class="button is-link" />
                    </div>
                    <p data-bind-model="updateResultMsg" data-bind-safe data-bind-class="{'is-success': 'isUpdated', 'is-danger': '!isUpdated' }" class="notification is-spaced"></p>
                </form>`)
    }
    
}