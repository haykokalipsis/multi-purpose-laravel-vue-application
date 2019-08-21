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
                                    <td>{{ user.created_at | momentDate }}</td>

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
                            <div class="form-group" :class="['form-group', errors.name ? 'has-error' : '']">
                                <label for="name">Name</label>

                                <input
                                        v-model="form.name"
                                        :class="['form-control', errors.name ? 'is-invalid' : '']"
                                        class="form-control" type="text" name="name" placeholder="Name" id="name">

                                <span v-if="errors.name" :class="['label label-danger']">@{{ errors.name[0] }}</span>
<!--                                <has-error :form="form" field="name"></has-error>-->
                            </div>

                            <div class="form-group" :class="['form-group', errors.email ? 'has-error' : '']">
                                <label for="email">Email</label>

                                <input
                                        :class="['form-control', errors.email ? 'is-invalid' : '']"
                                        v-model="form.email"
                                        class="form-control" type="email" name="email" placeholder="Email" id="email">

                                <span v-if="errors.email" :class="['label label-danger']">@{{ errors.email[0] }}</span>
                            </div>

                            <div class="form-group" :class="['form-group', errors.bio ? 'has-error' : '']">
                                <label for="bio">Bio</label>

                                <textarea
                                        :class="['form-control', errors.bio ? 'is-invalid' : '']"
                                        v-model="form.bio"
                                        class="form-control" name="bio" placeholder="Bio" id="bio">
                                        id="bio">
                                </textarea>

                                <span v-if="errors.bio" :class="['label label-danger']">@{{ errors.bio[0] }}</span>
                            </div>

                            <div class="form-group" :class="['form-group', errors.role ? 'has-error' : '']">
                                <label for="role">Role</label>

                                <select
                                        :class="['form-control', errors.role ? 'is-invalid' : '']"
                                        v-model="form.role"
                                        class="form-control" type="text" name="role" placeholder="Role" id="role">

                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="author">Author</option>
                                </select>

                                <span v-if="errors.role" :class="['label label-danger']">@{{ errors.role[0] }}</span>
                            </div>

                            <div class="form-group" :class="['form-group', errors.password ? 'has-error' : '']">
                                <label for="password">Password</label>

                                <input
                                        :class="['form-control', errors.password ? 'is-invalid' : '']"
                                        v-model="form.password"
                                        class="form-control" type="password" name="password" placeholder="Password" id="password">

                                <span v-if="errors.password" :class="['label label-danger']">@{{ errors.password[0] }}</span>
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
                success: false,
                errors: [],


                form: {
                    name : '',
                    email : '',
                    password : '',
                    role : '',
                    bio : '',
                    photo : '',
                }
            }
        },

        methods: {
            loadUsers() {
                axios.get('api/user')
                    .then( (response) => this.users = response.data.data)
                    .catch( (error) => console.error(error));
            },

            createUser() {
                this.$Progress.start();
                axios.post('api/user', this.form)

                    .then( (response) => {
                        console.log(response.data.data);
                        this.errors = [];
                        this.resetFields();
                        this.success = true;
                        // alert ('true');
                        this.$Progress.finish();

                        toast.fire({
                            type: 'success',
                            title: 'User Created in successfully'
                        });
                    })

                    .catch( (error) => {
                        this.errors = error.response.data.errors;
                        this.success = false;
                        alert ('false');
                        this.$Progress.fail();

                        toast.fire({
                            type: 'error',
                            title: 'User not Created in successfully'
                        });
                    });

                // $('#addNew').modal('hide');

                // this.$Progress.finish();

            },

            resetFields() {
                this.form.name = '';
                this.form.email = '';
                this.form.bio = '';
                this.form.role = '';
                this.form.password = '';
            }
        },

        created() {
            this.loadUsers();
        }
    }
</script>

<style scoped>

</style>