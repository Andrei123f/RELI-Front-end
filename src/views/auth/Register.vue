<template>
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-sm-center h-100">
				<div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div class="text-center my-4">
                        <img src="https://img.icons8.com/color/96/000000/edit-user-male--v1.png"
                        alt="logo"
                        width="100">
					</div>
					
					<div class="card shadow-lg">
						<div class="card-body p-5">
							<h1 class="fs-4 card-title fw-bold mb-4">Register</h1> 
							<form class="needs-validation" autocomplete="off" @submit.prevent="doLogin">
								<div class="mb-3">
									<label class="mb-2 text-muted" for="email">Email Address</label>
									<input id="email" 
										   type="email" 
										   class="form-control"
										   v-model="email"
										   required autofocus>
								</div>
                                <div class="mb-3">
									<label class="mb-2 text-muted" for="email">Username</label>
									<input id="username" 
										   type="text" 
										   class="form-control"
										   required>
								</div>

								<div class="mb-3">
									<div class="mb-2 w-100">
										<label class="text-muted" for="password">Password</label>
									</div>
									<input id="password" 
										   type="password" 
										   class="form-control" 
										   v-model="password"
										   required>
								</div>

								<div class="d-flex align-items-center">
									<button class="btn btn-primary ms-auto">
										<span v-if="!loading">Register</span> 
										<i v-if="loading" class="fas fa-spinner fa-pulse"></i>
									</button>
									
								</div>
							</form>

						</div>
						<div class="card-footer py-3 border-0">
							<div class="text-center"> 
								Already have an account?
								 <router-link to="/login">Log in</router-link>
							</div>
						</div>
					</div>
					<div class="text-center mt-5 text-muted">
						Copyright &copy; 2021-2022 &mdash;  <a href="https://github.com/Andrei123f" target=”_blank”>Andrei123f <i class="fa fa-github"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      email: '',
	  password: '',
	  remember_me: false,
	  loading: false,
    }
  },
  methods: {
	  	async doLogin() {
			try{
				this.email = this.email.replace(/ /g, "");
				this.password = this.password.replace(/ /g, "");
				if(this.email == '' || this.password == '') {
					this.emitter.emit('displayMessage', ['info', 'Please enter the required values.']);	  
					return;
				}

				let payload = {
					email: this.email,
					password: this.password,
					remember_me: this.remember_me
				}
				this.loading = true;
				
				const response = {
					result: 'SUCCESS',
					userLoggedIn: true,
					username: this.username,
					to
				}
						
			} catch(err){
				console.log('gets');
				console.log(err);
				this.loading = false;
				this.emitter.emit('displayMessage', ['error', `API submission failed. We cannot process your request right now.`]);
			}
	  }
    
  }
}
</script>