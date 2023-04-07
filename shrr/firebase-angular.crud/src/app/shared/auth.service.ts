import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth ,private router : Router) { }
  //login Method
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=> {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);

      if(res.user?.emailVerified == true){
        this.router.navigate(['dashboard']);
      }else{
        this.router.navigate(['/verify-email']);
      }

    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);

    })

  } 


  //register Method 
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('Registration Sucessfull')
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }


  //sign out 
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err => {
      alert(err.message);

    })
  }


  //Forgot password 
  forgotpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email'])

    },err=>{
      alert('Something went wrong ');
    })

  }

  //Email Verification 
  sendEmailForVerification(user:any){
    console.log(user);
    user.sendEmailForVerification().then((res : any)=>{
      this.router.navigate(['/verify-email']);
    },(err:any)=>{
      alert('Something went wrong . We are not able send Email. ')
    })

  }





}
