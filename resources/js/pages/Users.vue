<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>
                    
                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew">
                                Add New
                                &nbsp;
                                <i class="fas fa-fw fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="card-body table-responsive p-8">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Register date</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.role | capitalize}}</td>
                                    <td>{{ user.created_at | myDate }}</td>

                                    <td>
                                        <a href="">
                                            <i class="fa fa-edit text-red"></i>
                                        </a>

                                        <a href="">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewLabel">Add New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="createUser">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>

                                <input
                                        :class="{'is-invalid' : form.errors.has('name')}"
                                        v-model="form.name"
                                        class="form-control" type="text" name="name" placeholder="Name" id="name">

                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>

                                <input
                                        :class="{'is-invalid' : form.errors.has('email')}"
                                        v-model="form.email"
                                        class="form-control" type="email" name="email" placeholder="Email" id="email">

                                <has-error :form="form" field="email"></has-error>
                            </div>

                            <div class="form-group">
                                <label for="bio">Bio</label>

                                                <textarea
                                                        :class="{'is-invalid' : form.errors.has('bio')}"
                                                        v-model="form.bio"
                                                        class="form-control" type="text" name="bio" placeholder="Bio"
                                                        id="bio">
                                                </textarea>

                                <has-error :form="form" field="bio"></has-error>
                            </div>

                            <div class="form-group">
                                <label for="role">Role</label>

                                <select
                                        :class="{'is-invalid' : form.errors.has('role')}"
                                        v-model="form.role"
                                        class="form-control" type="text" name="role" placeholder="Role" id="role">

                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="author">Author</option>
                                </select>

                                <has-error :form="form" field="role"></has-error>
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>

                                <input
                                        :class="{'is-invalid' : form.errors.has('password')}"
                                        v-model="form.password"
                                        class="form-control" type="password" name="password" placeholder="Password" id="password">

                                <has-error :form="form" field="password"></has-error>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Users",

        data () {
            return {
                users: {},

                form: new Form({
                    name : '',
                    email : '',
                    password : '',
                    role : '',
                    bio : '',
                    photo : '',
                })
            }
        },

        methods: {
            loadUsers() {
                axios.get('api/user')
                    .then( (response) => this.users = response.data.data)
                    .catch( (error) => console.error(error));
            },

            createUser() {
                this.form.post('api/user');
            }
        },

        created() {
            this.loadUsers();
        }
    }
</script>

<style scoped>

</style>